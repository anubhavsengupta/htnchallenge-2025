import { TEvent } from "./types";



export async function retrieveEvents() {
    const res = await fetch("https://api.hackthenorth.com/v3/events");
    const events: TEvent[] = await res.json();
    return events;
}