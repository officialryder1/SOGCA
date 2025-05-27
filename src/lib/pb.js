import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090')


if(typeof window !== 'undefined') {
    pb.authStore.loadFromCookie(document.cookie) // Expose PocketBase instance to the global window object
}
export async function getEvents(startDate, endDate) {
    try {
        const records = await pb.collection('events').getList(1, 200, {
            filter: `(start_date >= '${startDate.toISOString()}' && start_date <= '${endDate.toISOString()}') || (end_date >= '${startDate.toISOString()}' && end_date <= '${endDate.toISOString()}')`,
            sort: 'start_date'
        });
        return records.items;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}
