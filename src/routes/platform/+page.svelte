<script>
    import { pb } from '$lib/pb';
    import { onMount } from 'svelte';

    let sermons = $state([]);
    let loading = $state(true);
    let error = $state(null);
    let selectedSermon = $state(null);
    let searchTerm = $state('');
    let selectedTopic = $state('');
    let topics = $state([])
    let filteredSermons = $state([]);

  
   
    // Fetch sermons from PocketBase
    async function loadSermons() {
        try {
            loading = true;
            const result = await pb.collection('E_Library').getFullList({
                sort: '-date',
                expand: 'series'
            });
            sermons = result;
            
            error = null;
        } catch (err) {
            console.error('Failed to load sermons:', err);
            error = 'Failed to load sermons. Please try again later.';
        } finally {
            loading = false;
        }
    }
    
    // Get unique topics for filtering
    $effect(() => topics = [...new Set(sermons.flatMap(sermon => sermon.topics || []))]);

    // Filter sermons based on search and topic
    $effect(() =>filteredSermons = sermons.filter(sermon => {
        const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTopic = !selectedTopic || (sermon.topics && sermon.topics.includes(selectedTopic));
        return matchesSearch && matchesTopic;
    }));

    // Load sermons on page load
    onMount(() => {
        loadSermons();
    });

</script>

<section class="py-12 bg-base-100 my-10">
    <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8 text-orange-500">Sermon Library</h1>
        
        <!-- Search and Filter -->
        <div class="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative">
                <input 
                    type="text" 
                    bind:value={searchTerm}
                    placeholder="Search sermons..." 
                    class="input input-bordered w-full pl-10 text-orange-100"
                />
                <svg class="w-5 h-5 absolute left-3 top-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            
            <select 
                bind:value={selectedTopic}
                class="select select-bordered w-full text-orange-500/90"
            >
                <option value="">All Topics</option>
                {#each topics as topic}
                    <option value={topic}>{topic.topics}</option>
                {/each}
            </select>
        </div>

        {#if error}
            <div class="alert alert-error mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{error}</span>
            </div>
        {:else if loading}
            <div class="flex justify-center py-12">
                <span class="loading loading-spinner loading-lg text-orange-500"></span>
            </div>
        {:else if filteredSermons.length === 0}
            <div class="text-center py-12">
                <p class="text-xl">No sermons found matching your criteria</p>
                <button onclick={() => { searchTerm = ''; selectedTopic = ''; }} class="btn btn-ghost mt-4">
                    Clear filters
                </button>
            </div>
        {:else}
            <!-- Main Content -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Sermon List -->
                <div class="lg:col-span-1 space-y-4 max-h-screen overflow-y-auto pr-2">
                    {#each filteredSermons as sermon}
                        <div 
                            class={`card bg-gray-900 shadow-md cursor-pointer transition-all ${selectedSermon?.id === sermon.id ? 'ring-2 ring-orange-500' : ''}`}
                            onclick={() => selectedSermon = sermon}
                            id={sermon.id}
                        >
                            <div class="card-body p-4">
                                <h3 class="card-title text-lg text-orange-500">{sermon.title}</h3>
                                <div class="flex items-center text-sm text-gray-300 mt-1">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {new Date(sermon.date).toLocaleDateString()} • {Math.floor(sermon.duration / 60)}:{String(sermon.duration % 60).padStart(2, '0')} min
                                </div>
                                <div class="flex flex-wrap gap-2 mt-2">
                                    {#each sermon.topics || [] as topic}
                                        <span class="badge badge-outline badge-sm">{topic}</span>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Video Player -->
                <div class="lg:col-span-2">
                    {#if selectedSermon}
                        <div class="bg-black rounded-lg overflow-hidden shadow-xl">
                            <iframe 
                                class="w-full aspect-video" 
                                src={selectedSermon.youtube_id}
                                title={selectedSermon.title}
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            ></iframe>
                        </div>

                        <div class="mt-6">
                            <h2 class="text-2xl font-bold">{selectedSermon.title}</h2>
                            {#if selectedSermon.speaker}
                                <p class="text-lg text-orange-500 mt-1">By {selectedSermon.speaker}</p>
                            {/if}
                            <p class="text-gray-500 mt-2">
                                {new Date(selectedSermon.date).toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </p>
                            
                            {#if selectedSermon.series}
                                <div class="mt-2">
                                    <span class="badge badge-primary">Part of: {selectedSermon.series}</span>
                                </div>
                            {/if}

                            <div class="prose max-w-none mt-4">
                                <p>{selectedSermon.description}</p>
                            </div>
                        </div>
                    {:else}
                        <div class="flex items-center justify-center bg-base-200 rounded-lg aspect-video">
                            <div class="text-center p-8">
                                <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <h3 class="text-xl font-medium mt-4">Select a sermon to begin</h3>
                                <p class="text-gray-500 mt-1">Choose from the list on the left</p>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        {/if}
    </div>
</section>