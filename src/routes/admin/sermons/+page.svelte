<script>
    import { pb } from '$lib/pb';
    
    let formData = {
        title: '',
        description: '',
        youtube_id: '',
        speaker: '',
        date: new Date().toISOString().split('T')[0],
        topics: [],
        duration: '',
        series: '',
        thumbnail: null
    };

    let newTopic = '';
    let isLoading = false;
    let successMessage = '';
    let errorMessage = '';

    function addTopic() {
        if (newTopic && !formData.topics.includes(newTopic)) {
            formData.topics = [...formData.topics, newTopic];
            newTopic = '';
        }
    }

    function removeTopic(topic) {
        formData.topics = formData.topics.filter(t => t !== topic);
    }

    async function handleSubmit() {
        if (!formData.title || !formData.youtube_id) {
            errorMessage = 'Title and YouTube ID are required';
            return;
        }

        isLoading = true;
        errorMessage = '';

        try {
            const data = new FormData();
            
            // Add all fields to form data
            for (const key in formData) {
                if (key === 'topics') {
                    data.append(key, JSON.stringify(formData[key]));
                } else if (key !== 'thumbnail') {
                    data.append(key, formData[key]);
                }
            }
            
            // Add thumbnail if exists
            if (formData.thumbnail) {
                data.append('thumbnail', formData.thumbnail);
            }

            await pb.collection('E_Library').create(data);
            
            successMessage = 'Sermon added successfully!';
            formData = {
                title: '',
                description: '',
                youtube_id: '',
                speaker: '',
                date: new Date().toISOString().split('T')[0],
                topics: [],
                duration: '',
                series: '',
                thumbnail: null
            };
        } catch (error) {
            console.error('Error adding sermon:', error);
            errorMessage = error.message || 'Failed to add sermon';
        } finally {
            isLoading = false;
        }
    }
</script>

<section class="py-12 bg-base-100 my-10">
    <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-8 text-orange-500/90">Add New Sermon</h1>
        
        {#if successMessage}
            <div class="alert alert-success mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{successMessage}</span>
            </div>
        {/if}
        
        {#if errorMessage}
            <div class="alert alert-error mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{errorMessage}</span>
            </div>
        {/if}

        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Title*</span>
                    </label>
                    <input 
                        type="text" 
                        bind:value={formData.title}
                        class="input input-bordered" 
                        required
                    />
                </div>
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Speaker</span>
                    </label>
                    <input 
                        type="text" 
                        bind:value={formData.speaker}
                        class="input input-bordered" 
                    />
                </div>
            </div>
            
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Description</span>
                </label>
                <textarea 
                    bind:value={formData.description}
                    class="textarea textarea-bordered h-32" 
                ></textarea>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">YouTube Video ID*</span>
                    </label>
                    <input 
                        type="text" 
                        bind:value={formData.youtube_id}
                        class="input input-bordered" 
                        required
                        placeholder="e.g., dQw4w9WgXcQ"
                    />
                    <label class="label">
                        <span class="label-text-alt">From YouTube URL: youtube.com/watch?v=<span class="font-bold">VIDEO_ID</span></span>
                    </label>
                </div>
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Date</span>
                    </label>
                    <input 
                        type="date" 
                        bind:value={formData.date}
                        class="input input-bordered" 
                    />
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Duration (minutes)</span>
                    </label>
                    <input 
                        type="number" 
                        bind:value={formData.duration}
                        class="input input-bordered" 
                    />
                </div>
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Series</span>
                    </label>
                    <input 
                        type="text" 
                        bind:value={formData.series}
                        class="input input-bordered" 
                        placeholder="Sermon series name"
                    />
                </div>
            </div>
            
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Topics/Tags</span>
                </label>
                <div class="flex flex-wrap gap-2 mb-2">
                    {#each formData.topics as topic}
                        <span class="badge badge-primary">
                            {topic}
                            <button 
                                type="button" 
                                on:click={() => removeTopic(topic)}
                                class="ml-1"
                            >
                                ×
                            </button>
                        </span>
                    {/each}
                </div>
                <div class="flex gap-2">
                    <input 
                        type="text" 
                        bind:value={newTopic}
                        class="input input-bordered flex-1" 
                        placeholder="Add new topic"
                    />
                    <button 
                        type="button" 
                        on:click={addTopic}
                        class="btn btn-primary"
                    >
                        Add
                    </button>
                </div>
            </div>
            
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Thumbnail Image</span>
                </label>
                <input 
                    type="file" 
                    accept="image/*"
                    on:change={(e) => formData.thumbnail = e.target.files[0]}
                    class="file-input file-input-bordered w-full" 
                />
            </div>
            
            <div class="form-control pt-4">
                <button type="submit" class="btn btn-primary" disabled={isLoading}>
                    {#if isLoading}
                        <span class="loading loading-spinner"></span>
                        Saving...
                    {:else}
                        Save Sermon
                    {/if}
                </button>
            </div>
        </form>
    </div>
</section>