<script>
    import { pb } from "$lib/pb";
    import { onMount } from "svelte";
	import { on } from "svelte/events";

    let sermons = $state([])
    let loading = $state(true)
    let error = null

    async function loadSermons() {
        try {
            loading = true
            const result = await pb.collection('E_Library').getList(1, 4, {
                sort: '-date',
                expand: 'series'
            })
            sermons = result.items
            error = null
        } catch (err) {
            console.error('Failed to load sermons:', err)
            error = 'Failed to load sermons. Please try again later.'
        } finally {
            loading = false
        }
    }
    onMount(() => {
        loadSermons();
    });
</script>

<!-- Sermons Section -->
<section class="py-12 bg-base-100">
    <div class="container mx-auto px-4">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-orange-500 mb-2">Recent Sermons</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">Be inspired by our latest messages</p>
            <a href="/platform" class="btn btn-ghost btn-sm mt-4 text-orange-600 hover:text-orange-700">
                View All Sermons
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>

        {#if error}
            <div class="alert alert-error max-w-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{error}</span>
            </div>
        {:else if loading}
            <div class="flex justify-center py-8">
                <span class="loading loading-spinner loading-lg text-orange-500"></span>
            </div>
        {:else}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {#each sermons as sermon}
                    <a href={`/platform#${sermon.id}`} class="group">
                        <div class="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                            <!-- Thumbnail -->
                            <figure class="relative aspect-video overflow-hidden">
                                {#if sermon.thumbnail}
                                    <img 
                                        src={pb.getFileUrl(sermon, sermon.thumbnail)} 
                                        alt={sermon.title}
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                {:else}
                                    <div class="bg-gray-300 w-full h-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                {/if}
                                <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                {#if sermon.duration}
                                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                                        {Math.floor(sermon.duration / 60)}:{String(sermon.duration % 60).padStart(2, '0')}
                                    </div>
                                {/if}
                            </figure>
                            
                            <!-- Content -->
                            <div class="card-body p-4">
                                <h3 class="card-title text-lg group-hover:text-orange-600 transition-colors line-clamp-2">{sermon.title}</h3>
                                {#if sermon.speaker}
                                    <p class="text-sm text-gray-500 mt-1">By {sermon.speaker}</p>
                                {/if}
                                <div class="flex items-center text-xs text-gray-400 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</section>