"use client";

import { useState } from "react";

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
          className={`px-4 py-2 rounded ${
            activeFilter === filter ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTab;
