"use client"

import { useEffect, useState } from 'react'
import { retrieveEvents } from './helpers/helpers';
import { TEvent } from './helpers/types';
import Navbar from './components/shared-ui/Navbar';
import SearchBar from './components/events-ui/SearchBar';
import { SearchProvider } from './context/SearchContext';
import Events from './components/events-ui/Events';
import EventTitle from './components/events-ui/EventTitle';

export default function Home() {
  const [data, setData] = useState<TEvent[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const events = await retrieveEvents();
      const data: TEvent[] = [];
      for (const key in events) {
        if (events.hasOwnProperty(key)) {
          data.push(events[key]); 
        }
      }
      setData(data);
    };

    fetchData();
  }, []);


  return (
    <div className="">
      <Navbar></Navbar>
      <SearchProvider>
        <EventTitle></EventTitle>
        <div className="p-4">
          <SearchBar />
        </div>
        <Events allEvents={data}></Events>
    </SearchProvider>
    </div>
  );
}
