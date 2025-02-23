import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-2 justify-center md:text-left text-center ">
      <h1 className="md:text-3xl text-2xl font-bold text-Hiaju drop-shadow shadow-kuning">
        Hello, <br /> Welcome to my portfolio 👋{" "}
      </h1>
      <p className="md:text-lg text-md mb-10">
        A Web Developer who is ready to create
        <br /> modern, fast, and responsive websites for the best user
        experience.
      </p>
    </div>
  );
};

export default HeroText;
