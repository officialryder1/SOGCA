<script>   
    import EventModel from '$lib/components/calender/eventModel.svelte';
    import Calender from '$lib/components/calender/calender.svelte';
    
    let {data} = $props();
    
    let selectedDate = $state(null);
    let selectedEvents = $state([]);
    let showModal = $state(false);
    
    function handleDateClick(date, events) {
        selectedDate = date;
        selectedEvents = events;
        showModal = true;
    }
</script>

<div class="container mx-auto px-4 py-8 my-10">
    <h1 class="text-3xl font-bold text-center mb-8 text-orange-500 text-shadow-2xs text-shadow-amber-50">Church Event Calendar</h1>
    
    <Calender 
        events={data.events} 
        onDateClick={handleDateClick} 
        class="bg-base-100 rounded-lg shadow-lg p-4"
    />
    
    {#if showModal}
        <EventModel 
            date={selectedDate} 
            events={selectedEvents} 
            onClose={() => showModal = false} 
        />
    {/if}
</div>