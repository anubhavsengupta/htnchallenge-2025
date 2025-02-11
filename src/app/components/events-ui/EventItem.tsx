import React, { useState } from "react";
import { DraggableProvided } from "@hello-pangea/dnd";
import { TEvent } from "@/app/helpers/types";
import { convertEventTypeName } from "../../helpers/helpers";
interface EventItemProps {
  event: TEvent;
  provided: DraggableProvided;
  allEvents: TEvent[]; // Pass all events to find related ones
}

const EventItem: React.FC<EventItemProps> = ({ event, provided, allEvents }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<TEvent | null>(event); // Stores the event currently displayed in the modal

  const relatedEvents = allEvents.filter((e) => currentEvent?.related_events?.includes(e.id));

  const openRelatedEvent = (relatedEvent: TEvent) => {
    setCurrentEvent(relatedEvent); // switch the modal content to the selected event
  };

  return (
    <>
      {/* Draggable Event Item */}
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="p-2 border-b bg-white cursor-grab shadow-md rounded-md"
        onClick={() => {
          setCurrentEvent(event);
          setIsModalOpen(true);
        }} // Open modal on click
      >
        <h3 className="text-lg font-bold text-purple-600">{event.name}</h3>
        <p className="text-sm text-gray-500">{convertEventTypeName(event.event_type)}</p>
      </div>

      {/* Modal */}
      {isModalOpen && currentEvent && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)} // close when clicking outside
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-[80vw] max-w-2xl"
            onClick={(e) => e.stopPropagation()} // prevent modal close on click inside
          >
            <h2 className="text-2xl font-bold text-black">{currentEvent.name}</h2>
            <p className="text-gray-600">{currentEvent.description || "No description available"}</p>
            <p className="mt-2 text-sm text-gray-500">Starts at: {new Date(currentEvent.start_time).toLocaleString()}</p>
            <p className="text-sm text-gray-500">Ends at: {new Date(currentEvent.end_time).toLocaleString()}</p>

            {/* Related Events Links */}
            {relatedEvents.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-black">Related Events</h3>
                <ul className="mt-2 space-y-1">
                  {relatedEvents.map((relatedEvent) => (
                    <li
                      key={relatedEvent.id}
                      className="text-blue-600 underline cursor-pointer"
                      onClick={() => openRelatedEvent(relatedEvent)} // Switch modal content
                    >
                      {relatedEvent.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
