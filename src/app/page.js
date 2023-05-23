import Image from "next/image";
import Buttons from "./components/atoms/Buttons";
import Cards from "./components/atoms/Cards";
import HeroSection from "./components/molecules/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
    </div>
  );
}
