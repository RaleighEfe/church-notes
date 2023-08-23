import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <form className="w-full max-w-md">
      <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
        <input
          type="text"
          placeholder="search by title, author or keywords"
          className="w-full  py-2 pr-3 pl-10 rounded-2xl"
        />
        <BsSearch
          size={20}
          color=""
          className="absolute ml-3 pointer-events-none"
        />
      </div>
    </form>
  );
};

export default SearchBar;
//  className =
//  "bg-white rounded-lg p-2 flex items-center justify-between md:w-80 ";
