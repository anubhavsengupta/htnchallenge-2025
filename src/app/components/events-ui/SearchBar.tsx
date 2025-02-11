import { useSearch } from "../../context/SearchContext";

const SearchBar = () => {
  const { searchText, setSearchText } = useSearch();

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="border-2 border-transparent bg-white p-[2px] rounded w-[50%] mx-auto block text-purple-600 
                focus:outline-none focus:ring-2 focus:ring-pink-300"
      style={{
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "border-box",
        boxShadow: "0 0 12px rgba(255, 105, 180, 0.5)", //  glowing effect!
      }}
    />

  );
};

export default SearchBar;
