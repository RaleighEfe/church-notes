import React from "react";
import classNames from "classnames";
import Buttons from "../atoms/Buttons";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-cover  bg-center items-center justify-center bg-backgroundImage brightness-50">
      <div className="text-white text-xl pb-10">
        <div className="flex flex-row p-3 w-full items-center justify-between">
          <div>Logo</div>
          <Link
            href="/login/"
            className=" py-2 px-5 border border-white rounded-md text-white inline-flex items-center justify-center text-xs"
          >
            LOG IN
          </Link>
        </div>
        <div className="text-center my-28">
          <h1 className="text-2xl lg:text-4xl mb-5 font-light">
            Welcome to the Church Notes
          </h1>
          <p className="text-xs md:text-base font-semibold pb-10">
            church notes provides users with a variety of media <br></br> I dont
            know what else to write
          </p>
          <Link
            href="/register/"
            className="bg-[#4f7942] px-10 py-2 text-white inline-flex items-center justify-center rounded-lg text-sm md:text-lg"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
