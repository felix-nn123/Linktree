import React from "react";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex absolute w-full h-full bg-[rgba(0,0,0,0.8)]">
        <div className="flex-1 flex justify-center items-center flex-col ">
          <h1 className="text-white text-3xl font-bold text-center pl-20 pr-20">
            Share your LinkTree
          </h1>
          <p className="text-white text-1xl text-center pt-5">
            Share your LinkTree with your friends and family, and let them know
            what you are up to.
          </p>
        </div>
        <div className="flex-1 bg-slate-300 flex justify-center items-center">
          <Slider />
        </div>
      </div>
      <img alt="Share" src="/images/share.jpg" className="w-full h-full" />
    </div>
  );
};

export default Header;
