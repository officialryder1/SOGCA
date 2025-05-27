<script>
    let { events=[], maxEvents=3 } = $props();

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    function formatTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
</script>

<div class="card bg-base-100 shadow-md">
    <div class="card-body">
        <div class="flex justify-between items-center mb-4">
            <h2 class="card-title text-xl text-orange-400">Upcoming Events</h2>
            <a href="/events" class="link text-orange-500 text-sm">View Full Calendar</a>
        </div>
        
        {#if events.length === 0}
            <div class="text-center py-4">
                <p>No upcoming events scheduled</p>
            </div>
        {:else}
            <div class="space-y-4">
                {#each events.slice(0, maxEvents) as event}
                    <div class="flex gap-4 items-start">
                        <div class="flex flex-col items-center justify-center bg-orange-700 text-primary-content rounded-lg p-2 min-w-16">
                            <div class="text-lg font-bold">
                                {new Date(event.start_date).getDate()}
                            </div>
                            <div class="text-xs uppercase">
                                {new Date(event.start_date).toLocaleString('default', { month: 'short' })}
                            </div>
                        </div>
                        
                        <div class="flex-1">
                            <h3 class="font-semibold {event.is_special ? 'text-orange-500' : ''}">
                                {event.title}
                                {#if event.is_special}
                                    <span class="badge bg-orange-400 badge-sm ml-2">Special</span>
                                {/if}
                            </h3>
                            <p class="text-sm text-gray-400">
                                {formatDate(event.start_date)} • {formatTime(event.start_date)}
                                {#if event.end_date}
                                    - {formatTime(event.end_date)}
                                {/if}
                            </p>
                            {#if event.description}
                                <p class="text-sm line-clamp-2 mt-1">{event.description}</p>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>