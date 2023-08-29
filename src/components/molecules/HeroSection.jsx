import React from "react";
import classNames from "classnames";
import Buttons from "../atoms/Buttons";
import Image from "next/image";
import Link from "next/link";
import Logo from "../atoms/Logo";

const HeroSection = () => {
  return (
    <div className="bg-cover bg-backgroundImage">
      <div className="text-white text-xl pb-10  bg-black/70">
        <div className="flex flex-row p-3 w-full items-center justify-between">
          {/* <div>Logo</div> */}
          <Logo />
          <Buttons type="white-outline" href="/login/">
            LOG IN
          </Buttons>
        </div>
        <div className="text-center my-28">
          <h1 className="text-2xl lg:text-4xl mb-5 font-light font-semibold ">
            Welcome to the BookCloset
          </h1>
          <p className="text-lg pb-10">
            book closet provides users with a variety of<br></br>
            audiobooks and ebooks
          </p>
          <Link
            href="/register/"
            className="bg-[#4f7942] px-10 py-2 text-white inline-flex items-center justify-center rounded-lg text-lg"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
