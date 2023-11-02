import { useContext, useState } from "react";
import { ImageContext } from "../App";

export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const { fetchData, setSearchImage } = useContext(ImageContext);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    const callSearch = () => {
        fetchData(
            `search/photos?page=1&query=${searchValue}&per_page=24&client_id=${import.meta.env.VITE_API_KEY}`
        );
        setSearchValue("");
        setSearchImage(searchValue);
    };
    const callEnter = (e) => {
        if (e.key === "Enter") {
            fetchData(
                `search/photos?page=1&query=${searchValue}&per_page=24&client_id=${import.meta.env.VITE_API_KEY}`
            );
            setSearchValue("");
            setSearchImage(searchValue);
        }
    };

    return (
      <div className="flex">
        <input
          className="bg-gray-50 border border-gray-300 placeholder-gray-800 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-100 focus:ring-2 rounded-l-full"
          type="search"
          placeholder="Keyword Here"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={callEnter}
        />
        <button
          className="bg-blue-600 px-6 py-2.5 text-white rounded-r-full focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
          onClick={callSearch}
          disabled={!searchValue}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </div>
    );
};

export default SearchBar;