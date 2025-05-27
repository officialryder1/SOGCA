import { getEvents } from "$lib/pb";

export async function load() {
    const today = new Date()
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    
    const events = await getEvents(firstDay, lastDay)

    return {
        events: events.map(event => ({
            ...event,
            start_date: new Date(event.start_date),
            end_date: event.end_date ? new Date(event.end_date) : null
        }))
    }
}