"use client"

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
        className="p-2 border-b bg-white cursor-grab shadow-md rounded-md 
        hover:shadow-lg hover:shadow-purple-700/50 
        transition-shadow duration-300 ease-in-out"
        onClick={() => {
          setCurrentEvent(event);
          setIsModalOpen(true);
        }} // Open modal on click
      >
        <h3 className="text-lg font-bold text-purple-600 font-montserrat leading-tight">{event.name}</h3>
        <p className="text-sm text-gray-500 font-poppins">{convertEventTypeName(event.event_type)}</p>
      </div>

      {/* Modal */}
      {isModalOpen && currentEvent && (
        <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4"
        onClick={() => setIsModalOpen(false)} // Close when clicking outside
      >
        <div
          className="bg-white p-6 rounded shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto sm:w-[80vw] sm:rounded-lg"
          onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
        >
          <h2 className="font-montserrat text-2xl font-bold text-black">{currentEvent.name}</h2>
          {/* Underline */ }
          <div className="h-[3px] bg-gradient-to-r from-orange-500 to-pink-500 mt-1 w-full mb-4"></div> 
          <p className="text-gray-600 font-inter">{currentEvent.description || "No description available"}</p>
          <p className="mt-2 text-sm text-gray-500 font-inter">Starts at: {new Date(currentEvent.start_time).toLocaleString()}</p>
          <p className="text-sm text-gray-500 font-inter">Ends at: {new Date(currentEvent.end_time).toLocaleString()}</p>

          {/* Speakers */}
          <h2 className="text-xl font-bold text-black mt-4">Speakers</h2> 
          <ul className="ml-2">
            {currentEvent.speakers.map((speaker) => (
              <li key={speaker.name} className="text-black font-inter">{speaker.name}</li>
            ))}
          </ul>

          {/* Related Events Links */}
          {relatedEvents.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-black font-montserrat">Related Events</h3>
              <ul className="mt-2 space-y-1">
                {relatedEvents.map((relatedEvent) => (
                  <li
                    key={relatedEvent.id}
                    className="relative text-orange-500 cursor-pointer transition-all duration-300 ease-in-out 
                              hover:text-pink-500 hover:scale-105 w-[100%] sm:w-[40%] font-poppins
                              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                              after:bg-gradient-to-r after:from-orange-500 after:to-pink-500 
                              after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                    onClick={() => openRelatedEvent(relatedEvent)}
                  >
                    {relatedEvent.name}
                  </li>


                ))}
              </ul>
            </div>
          )}

          {/* Close Button */}
          <button
            className="mt-4 px-6 py-2 rounded w-full sm:w-auto font-inter 
                      bg-gradient-to-r from-orange-500 to-pink-500 text-white 
                      shadow-md transition-all duration-300 ease-in-out 
                      hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95"
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
