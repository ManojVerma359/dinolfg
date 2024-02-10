import React, { useState } from "react";
import airplan from "../assets/images/hero_img.png";
import drgon2 from "../assets/images/drgn.png";
import drgon1 from "../assets/images/drgn1.png";
import rightree from "../assets/images/treeright.png";
import leftree from "../assets/images/treeleft.png";
import discord from "../assets/images/svg/discord.svg";
import twitter from "../assets/images/svg/twitter.svg";
import instgram from "../assets/images/svg/instagram.svg";
import btn_img from "../assets/images/btn_img.png";
import top_img from "../assets/images/top_img.png";
import bottom_img from "../assets/images/bottom_img.png";

const Header = () => {
  const updates = () => {
    setShow(!show);
  };
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="bg_img bg-[#c3e9ff] lg:bg-full bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px] relative pt-7 z-3">
        <img
          src={drgon1}
          alt="drgon1"
          className="absolute drgon1_animation  right-[8.5%] bottom-[4%] lg:max-w-[211px] sm:max-w-[140px] max-w-[100px]  w-full z-[1]"
          // data-aos="zoom-in"
        />
        <img
          src={drgon2}
          alt="#"
          className="absolute animate-bounce left-[14%] sm:left-[30%] md:left-[40%] lg:left-[49.5%] bottom-[10%]  md:max-w-[131px] sm:max-w-[65px] max-w-[100px] w-full z-0"
          // data-aos="zoom-in"
        />
        <div className="container xl:max-w-[1158px] mx-auto lg:px-3 px-5">
          <nav className="lg:py-[15.8px] py-3 lg:ps-6 lg:pe-2 px-4 bg-white rounded-[61.102px] border-b-4 border-b-[black] flex items-center justify-between sm:mb-20 mb-10 h-[67px]">
            <a href="">
              <h2 className="ff-lucky font-normal cursor-pointer leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] sm:text-[40px] text-[28px]">
                D<span className="text-[#23AAAC] ff-lucky ">i</span>
                <span className="text-[#D45B07] ff-lucky">n</span>
                <span className="text-[#8EC627] ff-lucky">o</span>
                <span className="text-[#FCCA2B] ff-lucky">L</span>
                <span className="text-[#8F78D2] ff-lucky">F</span>
                <span className="text-[#8EC627] ff-lucky">G</span>
              </h2>
            </a>
            <ul
              className={`${
                show ? "left-[-100%]" : "left-0 bg-[greenyellow]"
              } flex items-center gap-6 flex-row max-lg:fixed max-lg:z-50 max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300} z-5`}
            >
              <li onClick={() => setShow(!show)}>
                <a
                  href="#about"
                  className="text-black ff_chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  About
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#Tokenomic"
                  className="text-black ff_chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Tokenomic
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#Roadmap"
                  className="text-black ff_chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Roadmap
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#Faq"
                  className="text-black ff_chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  FAQ
                </a>
              </li>

              <li
                className="relative lg:hidden flex "
                onClick={() => setShow(!show)}
              >
                <img className="" src={btn_img} alt="#" />
                <a
                  href=""
                  className="absolute bottom-[1%] left-[12%] bg-full bg-no-repeat text-black ff_chewy text-[18px] font-normal leading-normal px-3 pt-[10px] pb-[17px]  z-2 hover:text-white transition-all duration-500 ease-in-out"
                >
                  Join Now
                </a>
              </li>
              <li className="gap-2 items-center sm:hidden flex">
                <a href="https://www.twitter.com" target="_blank">
                  <img src={twitter} alt="" />
                </a>
                <a href="https://www.discord.com" target="_blank">
                  <img src={discord} alt="" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img src={instgram} alt="" />
                </a>
              </li>
            </ul>
            <ul className="gap-2 items-center sm:flex hidden z-5">
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  <img
                    className="hover:scale-125 transition-all duration-500ms"
                    src={twitter}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.discord.com" target="_blank">
                  <img
                    className="hover:scale-125 transition-all duration-500ms"
                    src={discord}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <img
                    className="hover:scale-125 transition-all duration-500ms"
                    src={instgram}
                    alt=""
                  />
                </a>
              </li>
              <li className="relative">
                <img className="" src={btn_img} alt="#" />
                <a
                  href=""
                  className="absolute bottom-[1%] left-[12%] bg-full bg-no-repeat text-black ff_chewy text-[18px] font-normal leading-normal px-3 pt-[10px] pb-[17px]  z-2 hover:text-white transition-all duration-500 ease-in-out"
                >
                  Join Now
                </a>
              </li>
            </ul>
            <div
              onClick={() => setShow(!show)}
              className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
            >
              <span
                className={`${
                  show
                    ? ""
                    : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "hidden"
                } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </div>
          </nav>
          <div className="flex sm:flex-row flex-col-reverse items-center flex-wrap">
            <div
              className="sm:w-5/12 w-full sm:mt-0 mt-5 flex items-end justify-center sm:justify-start xl:ps-10"
              data-aos="zoom-in"
            >
              <img
                src={airplan}
                alt="#"
                className="sm:max-w-[395px] helicpoter w-full max-w-[250px] plan_ani"
              />
            </div>
            <div
              className="sm:w-7/12 w-full flex justify-center"
              data-aos="zoom-in"
            >
              <h1 className="ff-lucky font-normal lg:text-[175.64px] md:text-[130px] sm:text-[110px] text-[75px] leading-[91%] text-center drop-shadow-[0px_6px_0px_#000]">
                <span className="text-[#FBA11D] ff-lucky">D</span>
                <span className="text-[#23AAAC] ff-lucky">I</span>
                <span className="text-[#D45B07] ff-lucky">N</span>
                <span className="text-[#8EC627] ff-lucky">O</span>
                <br className="sm:block hidden ff-lucky" />
                <span className="text-[#8EC627] ff-lucky">L</span>
                <span className="text-[#FCCA2B] ff-lucky">F</span>
                <span className="text-[#8F78D2] ff-lucky">G</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-1">
        <img
          className="absolute top-[-4%] sm:top-[-5%] lg:top-[-8%] w-full "
          src={top_img}
          alt="#"
        />
        <img
          className="absolute xl:bottom-[-49%] lg:bottom-[-39%] md:bottom-[-28%] bottom-[-17%] 2xl:bottom-[-65%]  w-full"
          src={bottom_img}
          alt="#"
        />
        <div
          className={`${
            show ? "z-[unset]" : "z-[-1]"
          } bg-[#09655A] relative sm:pt-20 pt-10 -mt-1`}
          id="about"
        >
          <img
            src={rightree}
            alt="leftree"
            className="absolute right-0 lg:bottom-[-6%] sm:bottom-[-14%] bottom-0 z-[1] lg:max-w-[270px] sm:max-w-[200px] max-w-[120px]"
          />
          <img
            src={leftree}
            alt="leftree"
            className=" absolute lg:bottom-[-33%] sm:bottom-[-12%] bottom-0 left-0 z-[1] w-full lg:max-w-[197px] sm:max-w-[120px] max-w-[80px]"
          />
          <div className="container xl:max-w-[1156px] relative mx-auto lg:px-3 px-5 z-[1]">
            <h2
              className="font-normal sm:text-[69.669px] text-[42px] ff-lucky drop-shadow-[0px_2.38px_0px_#FFF] leading-[113%] sm:mb-[42px] mb-6 text-center"
              data-aos="zoom-in"
            >
              <span className="ff_chewy text-white">About</span>{" "}
              <span className="text-[#FBA11D] ff-lucky">D</span>
              <span className="text-[#23AAAC] ff-lucky">i</span>
              <span className="text-[#D45B07] ff-lucky">n</span>
              <span className="text-[#8EC627] ff-lucky">o</span>
              <span className="text-[#FCCA2B] ff-lucky">L</span>
              <span className="text-[#8F78D2] ff-lucky">F</span>
              <span className="text-[#8EC627] ff-lucky">G</span>
            </h2>
            <p
              className="text-white text-center sm:text-[24px] text-[16px] font-normal leading-[121%] mb-[18px] ff_balsmiq"
              data-aos="zoom-in"
            >
              $DINO is a meme coin with very strong utility.
            </p>
            <p
              className="text-white text-center ff_balsmiq mx-auto sm:text-[24px] text-[16px] lg:max-w-[560px] leading-[127%] mb-[10px] font-normal"
              data-aos="zoom-in"
            >
              Biggest problem of meme coins is lack of utility and usecase,{" "}
              <span className="text-[#8EC627] font-bold ">$</span>
              <span className="text-[#FBA11D] font-bold">D</span>
              <span className="text-[#23AAAC] font-bold">I</span>
              <span className="text-[#D45B07] font-bold">N</span>
              <span className="text-[#FB5352] font-bold">O</span> is going to
              fix it.
            </p>
            <p
              class="text-white mx-auto text-center font-normal sm:text-[24px] text-[16px] lg:max-w-[560px] leading-[127%] mb-3.5 ff_balsmiq"
              data-aos="zoom-in"
            >
              We want to bring a lot of usecases and utility to $DINO holders,
              just sit back and relax.
            </p>
            <p
              class="text-white sm:text-[24px] text-[16px] font-normal lg:max-w-[599px] text-center leading-[121%] md:pb-5 sm:pb-9 pb-7 ff_balsmiq mx-auto"
              data-aos="zoom-in"
            >
              In $DINO, we want to build a very strong community, that’s why we
              are going to have a lot of games and crypto tips in our Telegram
              and Twitter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
