import { useSearch } from "../../context/SearchContext";

const SearchBar = () => {
  const { searchText, setSearchText } = useSearch();

  return (
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border-2 p-3 rounded-lg w-[50%] mx-auto block text-purple-600
                  focus:outline-none font-poppins pl-4 transition-all duration-300 ease-in-out
                  bg-white border-orange-400 hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),6px_6px_20px_rgba(255,105,180,0.5)]"
        style={{
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "border-box",
        }}
      />


  );
};

export default SearchBar;
