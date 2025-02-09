import { TEvent } from "@/app/helpers/types";
import React from "react";
import EventList from "./EventList";
import { useSearch } from "@/app/context/SearchContext";

const Events = ({ allEvents }: { allEvents: TEvent[] }) => {
   const { searchText } = useSearch();

    const filteredEvents = allEvents.filter((event) => {
        return event.name.toLowerCase().includes(searchText.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(searchText.toLowerCase()))
    })

  return (
    <div>
      <EventList allEvents={filteredEvents} />
    </div>
  );
};

export default Events;
