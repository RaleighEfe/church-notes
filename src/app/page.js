import Cards from "../components/atoms/Cards";
import HeroSection from "../components/molecules/HeroSection";
import AboutUs from "../components/molecules/AboutUs";
import Footer from "../components/molecules/Footer";
import SingleBook from "./books/[slug]/page";
import RegisterPage from "./register/page";
import LoginPage from "./login/page";
import NoPage from "./nopage/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Cards header="Trending" />
      <Cards header="Historical" />

      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <NoPage /> */}
    </div>
  );
}
