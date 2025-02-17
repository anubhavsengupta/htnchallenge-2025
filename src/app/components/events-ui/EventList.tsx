import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import EventItem from "./EventItem";
import { TEvent } from "@/app/helpers/types";

const EventList = ({ allEvents }: { allEvents: TEvent[] }) => {
  const [events, setEvents] = useState<TEvent[]>([]);
  // whenever events update, we sort and set the event.
  useEffect(() => {
      const sortedEvents = [...allEvents].sort((a, b) => a.start_time - b.start_time);
      setEvents(sortedEvents);
  }, [allEvents]);

    /**
   * Handles the reordering of events when drag-and-drop is completed.
   * - Prevents updating if the item is dropped outside the list.
   * - Moves the dragged event to its new position.
   */
  const handleDragEnd = (result: any) => {
    if (!result.destination) return; // exit if item dropped outside the list

    const updatedEvents = Array.from(events);
    const [movedEvent] = updatedEvents.splice(result.source.index, 1);
    updatedEvents.splice(result.destination.index, 0, movedEvent);

    setEvents(updatedEvents);
  };
  // Using hello-pangea-dnd for drag-and-drop
  // Docs: https://github.com/atlassian/react-beautiful-dnd
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="events-list">
        {(provided) => (
          <ul
            ref={provided.innerRef} // assigns the droppable area reference
            {...provided.droppableProps}
            className="p-4 border rounded w-[60%] sm:w-[50%] mx-auto bg-gray-100 space-y-2"
          >
            {events.map((event, index) => (
              <Draggable key={event.id.toString()} draggableId={event.id.toString()} index={index}>
                {(provided) => <EventItem event={event} provided={provided} allEvents={events} />}
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
