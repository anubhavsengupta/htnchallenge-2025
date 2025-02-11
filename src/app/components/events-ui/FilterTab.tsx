"use client";

import { useState } from "react";
import { convertEventTypeName } from "../../helpers/helpers";
interface FilterTabProps {
  filters: string[]; 
  onFilterChange: (selectedFilter: string | null) => void; 
}

const FilterTab: React.FC<FilterTabProps> = ({ filters, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const selectFilter = (filter: string) => {
    const newFilter = activeFilter === filter ? null : filter; 
    setActiveFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="flex space-x-2 p-4 border-b">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => selectFilter(filter)}
          className={`px-4 py-2 rounded transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 
                      border-2 border-orange-500 shadow-md hover:shadow-lg
                      ${
                        activeFilter === filter
                          ? "bg-white text-black"  // Active state
                          : "bg-black text-white hover:bg-gray-900" // Default state
                      }`}
        >
          {convertEventTypeName(filter)}
        </button>
      ))}
    </div>
  );
  
};

export default FilterTab;
