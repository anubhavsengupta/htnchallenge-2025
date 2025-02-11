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
    <div className="flex space-x-2 p-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => selectFilter(filter)}
          className={`px-6 py-3 rounded transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 
                      border-2 border-orange-300 shadow-md hover:shadow-lg font-poppins 
                      hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),6px_6px_20px_rgba(255,105,180,0.5)]
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
