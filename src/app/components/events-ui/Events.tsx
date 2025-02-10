import { TEvent } from "@/app/helpers/types";
import { useEffect, useState } from "react";
import EventList from "./EventList";
import { useSearch } from "@/app/context/SearchContext";
import Cookies from "js-cookie";
import FilterTab from "./FilterTab";

const Events = ({ allEvents }: { allEvents: TEvent[] }) => {
   const { searchText } = useSearch();
   const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("loggedIn") === "true");
   const allFilters = ["tech_talk", "workshop", "activity"]; // Dynamic filters
   const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    useEffect(() => {
        setIsLoggedIn(Cookies.get("loggedIn") === "true");
    }, []);
   


    const filteredEvents = allEvents.filter((event) => {
        const cond1 = event.name.toLowerCase().includes(searchText.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(searchText.toLowerCase()))
        const cond2 = isLoggedIn ? true : event?.permission?.toLowerCase() === "public";
        const cond3 = selectedFilter ? event?.event_type == selectedFilter : true;
        return cond1 && cond2 && cond3;
    })

  return (
    <div>
      <div className="flex justify-center">
         <FilterTab filters={allFilters} onFilterChange={setSelectedFilter} />
      </div>
      <EventList allEvents={filteredEvents} />
    </div>
  );
};

export default Events;
