import { TEvent } from "@/app/helpers/types";
import React from "react";
import EventList from "./EventList";


const Events = ({ allEvents }: { allEvents: TEvent[] }) => {
    
  return (
    <div>
      <EventList allEvents={allEvents} />
    </div>
  );
};

export default Events;
