import React from "react";
// import Utilitylayer from "../assets/images/web.p/utility-layer.webp";
import drgon1 from "../assets/images/utiliy_drgon.png";
import drgon2 from "../assets/images/drgn1.png";
import unlity_tree from "../assets/images/unlity_tree.png";
import Roadmaplayer from "../assets/images/bottom_img2.png";
import img_tree3 from "../assets/images/img_tree222.png";

const Utility = () => {
  return (
  <>
    <div className="relative pt-[40px] sm:pt-[75px] md:pt-[110px] lg:pt-[160px]  xl:pt-[260px] pt_180 pt_200 md:pb-[110px]  sm:pb-[50px] pb-[3px] lg:pb-[168px]">
      <img
        src={img_tree3}
        alt="#"
        className="absolute sm:block hidden w-full left-0 top-[-22%] lg:top-[-26%] 2xl:top-[-40%] top_img top_img1"
      />
      <img
        src={Roadmaplayer}
        alt="#"
        className="absolute  w-full left-0 bottom-[-22px]"
      />
      <img
        src={unlity_tree}
        alt="#"
        className="absolute w-full lg:max-w-[343px] md:max-w-[250px] max-w-[170px] right-[0] lg:top-[37%] bottom-[-2%] md:bottom-[13%] md:block hidden"
      />
      <div className="container mx-auto xl:max-w-[1136px] lg:px-3 px-6">
        <h4
          className="ff_chewy font-normal text-[40px] sm:text-[64px] text-[#fff] leading-[132%] text-center"
          data-aos="zoom-in-up"
        >
          Utility and Usecase
        </h4>
        <div className="flex justify-center items-center mt-[40px] md:mt-[60px] lg:mt-[158px]">
          <div
            className="rounded-[20px] relative z-[2]  border-[1px] border-solid border-[#fff] bg-[#09655A] px-[15px] sm:px-[24px] pt-[25px] sm:pt-[40px] pb-[1px] lg:py-[62px] lg:pl-[39px] lg:pr-[24.49px] lg:max-w-[1014px] w-full mb-[35px] sm:mb-[50px] md:mb-[80px] lg:mb-[125px]"
            data-aos="zoom-in-up"
          >
            <p className="sm:text-[32px] text-[21px] text-[#fff] font-normal leading-[120%] max-w-[681px] lg:text-start text-center m-0">
              We are going to work hard in otder to add{" "}
              <span className="text-[#8EC627] font-bold">$</span>
              <span className="text-[#FBA11D] font-bold">D</span>
              <span className="text-[#23AAAC] font-bold">I</span>
              <span className="text-[#D45B07] font-bold">N</span>
              <span className="text-[#FB5352] font-bold">O</span> to main
              platforms as a form of payment
            </p>
            <p className="ff_Balsamiq text-[#fff] text-[21px] sm:text-[32px] leading-[119%] mb-0 mt-[15px] lg:mt-[28px] lg:text-start text-center">
              You will be able to buy a lot of things with{" "}
              <span className="text-[#8EC627] font-bold">$</span>
              <span className="text-[#FBA11D] font-bold">D</span>
              <span className="text-[#23AAAC] font-bold">I</span>
              <span className="text-[#D45B07] font-bold">N</span>
              <span className="text-[#FB5352] font-bold">O</span>
            </p>
            <div className="flex justify-center items-center lg:mt-0 sm:mt-[30px] mt-[20px]">
              <img
                src={drgon2}
                alt="#"
                className="lg:absolute   right-0 top-[-21%] sm:max-w-[255px] max-w-[210px] w-full lg:mr-[24px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-[100px] sm:mb-[200px] xl:mb-[300px]">
          <div
            className="rounded-[20px] relative z-[2] border-[1px] border-solid border-[#fff] bg-[#09655A] px-[15px] sm:px-[24px] pt-[25px] sm:pt-[40px] pb-[1px] lg:py-[95px] lg:pr-[27px] lg:max-w-[1014px] w-full"
            data-aos="zoom-in-up"
          >
            <div className="flex lg:justify-end justify-center">
              <p className="ff_Balsamiq text-[#fff] text-[21px] sm:text-[32px] leading-[119%] mb-0 lg:text-end text-center lg:max-w-[681px]">
                We are going to have staking and buyback/
                <span className="md:block">burning mechanism</span>
              </p>
            </div>
            <div className="flex justify-center items-center lg:mt-0 sm:mt-[30px] mt-[20px]">
              <img
                src={drgon1}
                alt="drgon1"
                className="lg:absolute img_animation left-0 top-[-25%] sm:max-w-[267px] max-w-[240px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Utility;
