<script>
    import { pb } from "$lib/pb";
    import { onMount } from 'svelte'

    let events = $state([])

    let formData = $state({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        is_special: false,
        color: '#3b82f6'
    })

    let editingId = $state(null)

    
    async function loadEvents() {
        const result = await pb.collection('events').getList(1, 50, {
            sort: '-start_date'
        });
        events = result.items;
    }

    
    async function submitEvent() {
        try {
            const data = {
                ...formData,
                start_date: new Date(formData.start_date).toISOString(),
                end_date: formData.end_date ? new Date(formData.end_date).toISOString() : null
            };
            
            if (editingId) {
                await pb.collection('events').update(editingId, data);
            } else {
                await pb.collection('events').create(data);
            }
            
            resetForm();
            await loadEvents();
        } catch (error) {
            console.error('Error saving event:', error);
        }
    }
    
    function editEvent(event) {
        editingId = event.id;
        formData = {
            title: event.title,
            description: event.description,
            start_date: event.start_date.slice(0, 16), // Remove seconds for datetime-local input
            end_date: event.end_date ? event.end_date.slice(0, 16) : '',
            is_special: event.is_special,
            color: event.color || '#3b82f6'
        };
    }
    
    async function deleteEvent(id) {
        if (confirm('Are you sure you want to delete this event?')) {
            await pb.collection('events').delete(id);
            await loadEvents();
        }
    }
    
    function resetForm() {
        formData = {
            title: '',
            description: '',
            start_date: '',
            end_date: '',
            is_special: false,
            color: '#3b82f6'
        };
        editingId = null;
    }
    
    onMount(() => {
        loadEvents();
    })
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 mt-10 text-orange-500 text-shadow-2xs text-shadow-amber-50">Manage Church Events</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Event Form -->
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{editingId ? 'Edit Event' : 'Add New Event'}</h2>
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Event Title</span>
                    </label>
                    <input 
                        type="text" 
                        bind:value={formData.title}
                        class="input input-bordered" 
                        placeholder="Event name"
                    />
                </div>
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea 
                        bind:value={formData.description}
                        class="textarea textarea-bordered" 
                        placeholder="Event description"
                    ></textarea>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Start Date & Time</span>
                        </label>
                        <input 
                            type="datetime-local" 
                            bind:value={formData.start_date}
                            class="input input-bordered" 
                        />
                    </div>
                    
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">End Date & Time (optional)</span>
                        </label>
                        <input 
                            type="datetime-local" 
                            bind:value={formData.end_date}
                            class="input input-bordered" 
                        />
                    </div>
                </div>
                
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <span class="label-text">Special Program</span>
                        <input 
                            type="checkbox" 
                            bind:checked={formData.is_special}
                            class="checkbox checkbox-primary" 
                        />
                    </label>
                </div>
                
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Event Color</span>
                    </label>
                    <input 
                        type="color" 
                        bind:value={formData.color}
                        class="input input-bordered p-1 h-10" 
                    />
                </div>
                
                <div class="card-actions justify-end mt-4">
                    {#if editingId}
                        <button onclick={resetForm} class="btn btn-ghost">Cancel</button>
                    {/if}
                    <button onclick={submitEvent} class="btn btn-primary">
                        {editingId ? 'Update' : 'Add'} Event
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Event List -->
        <div>
            <h2 class="text-xl font-bold mb-4">Upcoming Events</h2>
            
            <div class="overflow-x-auto">
                <table class="table table-zebra">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each events as event}
                            <tr>
                                <td>{event.title}</td>
                                <td>
                                    {new Date(event.start_date).toLocaleString()}
                                    {#if event.end_date}
                                        <br>
                                        to {new Date(event.end_date).toLocaleString()}
                                    {/if}
                                </td>
                                <td>
                                    {#if event.is_special}
                                        <span class="badge badge-secondary">Special</span>
                                    {:else}
                                        <span class="badge badge-primary">Regular</span>
                                    {/if}
                                </td>
                                <td>
                                    <div class="flex gap-2">
                                        <button 
                                            onclick={() => editEvent(event)}
                                            class="btn btn-sm btn-info"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onclick={() => deleteEvent(event.id)}
                                            class="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>