<script>
    let {events=[], onDateClick=false} = $props();

    let currentDate = new Date();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function navigateMonth(offset){
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    }

    function getDaysInMonth(){
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1)
        const lastDay= new Date(year, month + 1, 0)

        const days = [];
        const startingDay = firstDay.getDay();

        // Add empty days for prev month
        for (let i = 0; i < startingDay; i++){
            days.push(null)
        }

        // add days for current months
         for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(year, month, day);
            days.push(date);
        }

        return days;
    }

    function getEventsForDate(date) {
        if (!date) return [];
        
        return events.filter(event => {
            const eventStart = new Date(event.start_date);
            const eventEnd = event.end_date ? new Date(event.end_date) : eventStart;
            
            return date >= new Date(eventStart.getFullYear(), eventStart.getMonth(), eventStart.getDate()) && 
                   date <= new Date(eventEnd.getFullYear(), eventEnd.getMonth(), eventEnd.getDate());
        });
    }

    let days = $state(getDaysInMonth())
    let monthName = $state(currentDate.toLocaleString('default', {month: 'long', year: 'numeric'}))
</script>


<div class="w-full my-10">
    <div class="flex justify-between items-center mb-4">
        <button onclick={() => navigateMonth(-1)} class="btn bg-orange-500 text-white">
            Previous
        </button>
        <h2 class="text-xl font-bold text-orange-500">{monthName}</h2>
        <button onclick={() => navigateMonth(1)} class="btn bg-orange-500 text-white">
            Next
        </button>
    </div>
    
    <div class="grid grid-cols-7 gap-2">
        {#each daysOfWeek as day}
            <div class="text-center font-bold p-2 bg-base-200 rounded text-orange-400">
                {day}
            </div>
        {/each}
        
        {#each days as day}
            
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div 
                class="min-h-24 p-2 border border-base-300 rounded text-orange-400 {!day ? 'bg-base-200' : 'hover:bg-base-200 cursor-pointer'}"
                onclick={() => day && onDateClick(day, getEventsForDate(day))}
            >
                {#if day}
                    <div class="font-bold">{day.getDate()}</div>
                    
                    {#each getEventsForDate(day).slice(0, 2) as event}
                        <div 
                            class="text-xs p-1 mb-1 rounded truncate 
                                   {event.is_special ? 'bg-secondary text-secondary-content' : 'bg-primary text-primary-content'}"
                        >
                            {event.title}
                        </div>
                    {/each}
                    
                    {#if getEventsForDate(day).length > 2}
                        <div class="text-xs p-1 rounded bg-accent text-accent-content">
                            + {getEventsForDate(day).length - 2} more
                        </div>
                    {/if}
                {/if}
            </div>
        {/each}
    </div>
</div>