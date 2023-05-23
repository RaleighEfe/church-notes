import React from "react";
import classNames from "classnames";
import Buttons from "../atoms/Buttons";

const HeroSection = () => {
  return (
    <div
      className={classNames(
        "bg-cover",
        "bg-center",
        "h-screen",
        // "grid",
        // "items-center",
        // "justify-center",
        "text-white",
        "bg-cat"
      )}
    >
      <div className="w-full h-full backdrop-brightness-50">
        <div className="flex justify-between p-5">
          <div>Logo</div>
          <Buttons type="white-outline">LOG IN</Buttons>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to the Church Notes</h1>
          <p className="m-4 text-lg">
            church notes provides users with a variety of media <br></br> ewbde
            bfseuhf bjscnas duhawuwns sxbaj
          </p>
          <Buttons type="filled">GET STARTED</Buttons>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
