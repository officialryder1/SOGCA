import { getEvents } from "$lib/pb";

export async function load() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    
    const events = await getEvents(today, nextMonth);
    
    return {
        upcomingEvents: events
            .map(event => ({
                ...event,
                start_date: new Date(event.start_date),
                end_date: event.end_date ? new Date(event.end_date) : null
            }))
            .sort((a, b) => a.start_date - b.start_date)
    };
};