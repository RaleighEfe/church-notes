import React from "react";
import classNames from "classnames";
import Buttons from "../atoms/Buttons";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-cover  bg-center items-center justify-center bg-backgroundImage brightness-50">
      <div className="text-white text-xl pb-10">
        <div className="flex flex-row p-3 w-full items-center justify-between">
          <div>Logo</div>
          <Buttons type="white-outline">LOG IN</Buttons>
        </div>
        <div className="text-center my-28">
          <h1 className="text-2xl lg:text-4xl mb-5 font-light">
            Welcome to the Church Notes
          </h1>
          <p className="text-xs md:text-md lg:text-lg font-semibold pb-10">
            church notes provides users with a variety of media <br></br> I dont
            know what else to write
          </p>
          <Buttons type="filled">GET STARTED</Buttons>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
