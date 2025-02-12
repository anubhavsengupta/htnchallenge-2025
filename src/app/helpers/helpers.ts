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


export const formatEventTime = (startTime: number, endTime: number): string => {
    const start = new Date(startTime);
    const end = new Date(endTime);
  
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    const timeOptions: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit", hour12: true };
  
    const formattedDate = start.toLocaleDateString("en-US", options);
    const startTimeFormatted = start.toLocaleTimeString("en-US", timeOptions);
    const endTimeFormatted = end.toLocaleTimeString("en-US", timeOptions);
  
    return `${formattedDate}, ${startTimeFormatted} - ${endTimeFormatted}`;
  };