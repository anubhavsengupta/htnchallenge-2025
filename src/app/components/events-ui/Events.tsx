import { TEvent } from "@/app/helpers/types";
import { useEffect, useState } from "react";
import EventList from "./EventList";
import { useSearch } from "@/app/context/SearchContext";
import Cookies from "js-cookie";

const Events = ({ allEvents }: { allEvents: TEvent[] }) => {
   const { searchText } = useSearch();
   const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("loggedIn") === "true");

    useEffect(() => {
        setIsLoggedIn(Cookies.get("loggedIn") === "true");
    }, []);
   


    const filteredEvents = allEvents.filter((event) => {
        const cond1 = event.name.toLowerCase().includes(searchText.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(searchText.toLowerCase()))
        const cond2 = isLoggedIn ? true : event?.permission?.toLowerCase() === "public";
        return cond1 && cond2;
    })

  return (
    <div>
      <EventList allEvents={filteredEvents} />
    </div>
  );
};

export default Events;
