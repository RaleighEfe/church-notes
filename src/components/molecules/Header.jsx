import Buttons from "../atoms/Buttons";
import SearchBar from "../atoms/SearchBar";
const Header = () => {
    return (
      <header className="bg-[#4f7942] p-3">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl">LOGO</div>
          <Buttons type="white-outline">LOG IN</Buttons>
        </div>
        <div className="flex place-content-center mt-2">
          <SearchBar />
        </div>
      </header>
    );
}
 
export default Header;