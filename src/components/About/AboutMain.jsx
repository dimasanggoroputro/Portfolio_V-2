import React from "react";
import AboutText from "./AboutText";
import AboutSkils from "./AboutSkils";
import AboutButton from "./AboutButton";

const AboutMain = () => {
  return (
    <div
      className=" bg-Putih flex-col flex justify-center items-center py-10 md:px-10 lg:px-52 px-5"
      id="about"
    >
      <h1 className="text-Hiaju text-3xl font-bold drop-shadow-xl pb-6">
        About<samp className="text-kuning font-bold ">Me</samp>
      </h1>
      <AboutText />
      <AboutSkils />
      <AboutButton />
    </div>
  );
};

export default AboutMain;
