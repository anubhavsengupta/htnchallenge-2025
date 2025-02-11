import { TEvent } from "./types";



export async function retrieveEvents() {
    const res = await fetch("https://api.hackthenorth.com/v3/events");
    const events: TEvent[] = await res.json();
    return events;
}

export function convertEventTypeName(eventTypeName: string) {
    switch (eventTypeName) {
        case "workshop":
            return "Workshop";
        case "activity":
            return "Activity";
        case "tech_talk":
            return "Tech Talk";
        default:
            return "Unknown";
    }
}