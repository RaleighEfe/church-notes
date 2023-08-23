import Buttons from "../atoms/Buttons";
import SearchBar from "../atoms/SearchBar";
import Logo from "../atoms/Logo";
const Header = () => {
  return (
    <header className="bg-[#4f7942] p-3">
      <div className="flex items-center justify-between py-2">
        <Logo />
        <Buttons type="white-outline" href="/login/">
          LOG IN
        </Buttons>
      </div>
      <div className="flex place-content-center mt-2">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
