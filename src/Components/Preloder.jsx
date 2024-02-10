import React from "react";
import preloder from "../assets/images/helicopterroadmap.43623f49ad616fe7878f.webp";

const PreLoder = () => {
  setTimeout(() => {
    document.getElementById("preloder").classList.add("hidden");
    document.body.classList.remove("over_hidden");
  }, 4000);
  return (
    <>
      <div
        id="preloder"
        className="min-h-screen fixed top-0 bg-[#c1e9ff] start-0  w-full z-[500] flex justify-center flex-col items-center "
      >
        <img
          className="max-w-[180px] md:max-w-[300px] animate-bounce max-sm:max-h-[50px] max-md:max-h-[70px] max-h-[100px] duration-300ms"
          src={preloder}
          alt="#"
        />
        <h2 className="font-normal sm:text-[69.669px] text-[42px] ff-lucky  text-center">
          <span className="text-[#FBA11D] ff-lucky">D</span>
          <span className="text-[#23AAAC] ff-lucky">i</span>
          <span className="text-[#D45B07] ff-lucky">n</span>
          <span className="text-[#8EC627] ff-lucky">o</span>
          <span className="text-[#FCCA2B] ff-lucky">L</span>
          <span className="text-[#8F78D2] ff-lucky">F</span>
          <span className="text-[#8EC627] ff-lucky">G...</span>
        </h2>
      </div>
    </>
  );
};

export default PreLoder;
