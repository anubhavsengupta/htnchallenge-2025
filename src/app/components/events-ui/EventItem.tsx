import React, { useState } from "react";
import { DraggableProvided } from "@hello-pangea/dnd";
import { TEvent } from "@/app/helpers/types";

interface EventItemProps {
  event: TEvent;
  provided: DraggableProvided;
}

const EventItem: React.FC<EventItemProps> = ({ event, provided }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Draggable Event Item */}
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="p-2 border-b bg-white cursor-grab shadow-md rounded-md"
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        <h3 className="text-lg font-bold text-purple-600">{event.name}</h3>
        <p className="text-sm text-gray-500">{event.event_type}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)} // Close when clicking outside
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-[80vw] max-w-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
          >
            <h2 className="text-2xl font-bold">{event.name}</h2>
            <p className="text-gray-600">{event.description || "No description available"}</p>
            <p className="mt-2 text-sm text-gray-500">Starts at: {new Date(event.start_time).toLocaleString()}</p>
            <p className="text-sm text-gray-500">Ends at: {new Date(event.end_time).toLocaleString()}</p>

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EventItem;
