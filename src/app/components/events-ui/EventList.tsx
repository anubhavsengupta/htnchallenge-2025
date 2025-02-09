import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import EventItem from "./EventItem"; // Import the new component
import { TEvent } from "@/app/helpers/types";


const EventList = ({ allEvents }: { allEvents: TEvent[] }) => {
  const [events, setEvents] = useState<TEvent[]>([]);

  useEffect(() => {
    if (allEvents && Object.keys(allEvents).length > 0) {
      // Sort events based on start_time
      allEvents.sort((a, b) => a.start_time - b.start_time);
      setEvents(allEvents); 
    }
  }, [allEvents]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return; // Exit if dropped outside the list

    const updatedEvents = Array.from(events);
    const [movedEvent] = updatedEvents.splice(result.source.index, 1);
    updatedEvents.splice(result.destination.index, 0, movedEvent);

    setEvents(updatedEvents);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="events-list">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-4 border rounded w-[30%] mx-auto bg-gray-100 space-y-2"
          >
            {events.map((event, index) => (
              <Draggable key={event.id} draggableId={event.id.toString()} index={index}>
                {(provided) => <EventItem event={event} provided={provided} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default EventList;
