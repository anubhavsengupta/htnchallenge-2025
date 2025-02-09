import { createContext, useState, useContext, ReactNode } from "react";
import { SearchContextType } from "../helpers/types";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchText, setSearchText] = useState("");
  
    return (
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        {children}
      </SearchContext.Provider>
    );
  };

// hook for using search context
export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
      throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
  };