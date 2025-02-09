import React from "react";
import { DraggableProvided } from "@hello-pangea/dnd";
import { TEvent } from "@/app/helpers/types";

interface EventItemProps {
  event: TEvent;
  provided: DraggableProvided;
}

const EventItem: React.FC<EventItemProps> = ({ event, provided }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="p-2 border-b bg-white cursor-grab shadow-md rounded-md"
    >
      <h3 className="text-lg font-bold">{event.name}</h3>
      <p className="text-sm text-gray-500">{event.event_type}</p>
    </div>
  );
};

export default EventItem;
