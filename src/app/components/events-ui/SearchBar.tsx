import { useSearch } from "../../context/SearchContext";

const SearchBar = () => {
  const { searchText, setSearchText } = useSearch();

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="border p-2 rounded w-[50%] text-purple-600 mx-auto block"
    />
  );
};

export default SearchBar;
