import React from "react";

const HeroImg = () => {
  return (
    <div>
      <img
        src="/img/me.png"
        alt="Dimas Anggoro Putro"
        className="md:max-h-[600px] max-h-[250px] w-auto rounded-full shadow-xl shadow-kuning/40 hover:scale-105 transition-all duration-200"
      />
    </div>
  );
};

export default HeroImg;
