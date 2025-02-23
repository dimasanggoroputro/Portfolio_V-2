import React from "react";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

function HeroMain() {
  return (
    <div
      className=" md:pt-52 pt-36 pb-16 md:min-h-max lg:min-h-screen sm:min-h-screen"
      id="home"
    >
      <div className="flex md:flex-row flex-col max-w-7xl md:mx-23  mx-auto justify-between items-center relative px-6">
        <HeroText />
        <HeroImg />
      </div>
    </div>
  );
}

export default HeroMain;
