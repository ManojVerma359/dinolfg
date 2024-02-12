import React from "react";
import footer_img from "../assets/images/footer_img.png";
import discord from "../assets/images/svg/f_discord.svg";
import twitter from "../assets/images/svg/f_twitter.svg";
import instgram from "../assets/images/svg/f_instagram.svg";
import drgon1 from "../assets/images/drgn1.png";

const Footer = () => {
  return (
    <>
      <div className="xl:pt-[249px] lg:pt-[180px] md:pt-[120px] sm:pt-[70px] pt-[45px] relative ">
        <img className="absolute bottom-[0] w-full" src={footer_img} alt="#" />
        <img
          className="absolute max-sm:w-[51%] max-w-[31%] right-[6%] bottom-[0] drgon1_animation"
          src={drgon1}
          alt="#"
        />
        <div className="flex flex-col justify-center items-center px-3">
          <a href="">
            <h2 className="ff-lucky font-normal cursor-pointer leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] sm:text-[80.37px] text-[50px]">
              D<span className="text-[#23AAAC] ff-lucky ">i</span>
              <span className="text-[#D45B07] ff-lucky">n</span>
              <span className="text-[#8EC627] ff-lucky">o</span>
              <span className="text-[#FCCA2B] ff-lucky">L</span>
              <span className="text-[#8F78D2] ff-lucky">F</span>
              <span className="text-[#8EC627] ff-lucky">G</span>
            </h2>
          </a>
          <p className="max-w-[376px] sm:pt-[20px] pt-[16px] md:pt-[33px] text-[14px] ff_balsmiq text-white text-center ">
            Sed tempus pretium est, vestibulum dapibus mauris viverra id.
            Curabitur feugiat porta lorem,{" "}
          </p>
          <div className="flex gap-[10px] stroke-[white] sm:pt-[20px] pt-[16px] md:pt-[33px] pb-[160px]  sm:pb-[267px] 2xl:pb-[350px]">
            <a className="z-1 relative hover:scale-125 transition-all duration-500ms" href="https://twitter.com/?lang=en">
              {" "}
              <img src={twitter} alt="" />
            </a>

            <a className="z-1 relative hover:scale-125 transition-all duration-500ms" href="https://discord.com/?lang=en">
              {" "}
              <img src={discord} alt="" />
            </a>

            <a className="z-1 relative hover:scale-125 transition-all duration-500ms" href="https://instagram.com/?lang=en">
              {" "}
              <img src={instgram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
