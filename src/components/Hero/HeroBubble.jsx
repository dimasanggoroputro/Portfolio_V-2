import React from "react";

const HeroBubble = () => {
  return (
    <div>
      {/* Bubble Hijau */}
      <div className="w-40 h-40 bg-Hiaju rounded-full shadow-lg absolute top-0 right-44 -z-10 animate-pulse blur-2xl"></div>
      <div className="w-32 h-32 bg-Hiaju rounded-full shadow-lg absolute top-60 left-0 -z-10 animate-pulse blur-2xl"></div>
      <div className="w-32 h-32 bg-Hiaju rounded-full shadow-lg absolute top-[600px] right-[40%] -z-10 animate-pulse blur-2xl"></div>

      {/* Bubble Kuning */}
      <div className="w-40 h-40 bg-kuning rounded-full shadow-lg absolute top-0 right-16 -z-10 animate-pulse blur-2xl"></div>
      <div className="w-32 h-32 bg-kuning rounded-full shadow-lg absolute top-36 lift-0 -z-10 animate-pulse blur-2xl"></div>
      <div className="w-32 h-32 bg-kuning rounded-full shadow-lg absolute top-[600px] right-[50%] -z-10 animate-pulse blur-2xl"></div>
    </div>
  );
};

export default HeroBubble;
