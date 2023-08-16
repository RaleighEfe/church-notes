import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg p-2 flex items-center justify-between md:w-80 ">
      <input
        type="text"
        placeholder="search by title, author or keywords"
        className=""
      />
      <BsSearch size={20} color="" className="text-[#48494B] place-self-end" />
    </div>
  );
};

export default SearchBar;
