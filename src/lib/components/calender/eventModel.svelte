<script>
    let { date, events=[], onClose=false} = $props()

    let formattedDate = $state()

    $effect(() => {
            formattedDate = date?.toLocaleDateString('en-Us', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
    )
</script>

<div class="modal modal-open">
    <div class="modal-box max-w-2xl">
        <button onclick={onClose} class="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
        </button>
        
        <h3 class="font-bold text-lg">{formattedDate}</h3>
        
        <div class="divider"></div>
        
        <div class="space-y-4">
            {#each events as event}
                <div class="card {event.is_special ? 'bg-secondary text-secondary-content' : 'bg-base-200'}">
                    <div class="card-body">
                        <div class="flex justify-between items-start">
                            <h4 class="card-title">{event.title}</h4>
                            {#if event.is_special}
                                <span class="badge badge-primary">Special Program</span>
                            {/if}
                        </div>
                        
                        <p>
                            <span class="font-bold">Time:</span> 
                            {new Date(event.start_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            {#if event.end_date}
                                - {new Date(event.end_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            {/if}
                        </p>
                        
                        {#if event.description}
                            <p class="whitespace-pre-line">{event.description}</p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
        
        <div class="modal-action">
            <button onclick={onClose} class="btn">Close</button>
        </div>
    </div>
</div>