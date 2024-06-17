import React from "react";
import { LogoDesignIcon, LogoDesignVectorWhite } from "./common/Icon";
import logoDesign from "../assets/images/webp/Strategy/logo-design.webp";
import dollarred from "../assets/images/webp/Strategy/dollar-red.webp";
import brandingLogo from "../assets/images/webp/Strategy/branding-logo.webp";
import Teamup from "../assets/images/webp/Strategy/team-up.webp";
import manavatar from "../assets/images/webp/Strategy/man-avatar-like.webp";
const Strategy = () => {
  return (
    <div className="pt-[193px] bg-darkpurple">
      <div className="container max-w-[1164px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-5/12 px-3">
            <div className="flex justify-center items-center max-md:w-[70px] max-md:h-[70px] w-[93px] h-[93px] bg-white rounded-lg shadow-creativeiconshadow max-lg:mx-auto">
              <LogoDesignIcon />
            </div>
            <p className=" font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-white leading-normal mt-6 sm:mt-8 md:mt-[39px] max-lg:text-center">
              Logo Design
            </p>
            <p className=" font-poppins font-normal text-base md:text-lg lg:text-xl text-white leading-normal lg:max-w-[421px] opacity-70 mt-2">
              Logo design is a specialized discipline within the realm of
              graphic design, focused on creating unique and memorable visual
              symbols that represent a brand, company, or organization.
            </p>
          </div>
          <div className="w-7/12 px-3">
            <div className="flex items-center justify-center relative z-[1] gap-[22px]">
              <span className="absolute bottom-[15%] right-[3%] z-[-1]">
                <LogoDesignVectorWhite />
              </span>
              <div className="flex flex-col gap-[26px]">
                <div className="max-w-[203px]">
                  <img
                    className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                    width={203}
                    height={219}
                    src={logoDesign}
                    alt="watch"
                  />
                </div>
                <div className="max-w-[203px]">
                  <img
                    className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                    width={203}
                    height={219}
                    src={brandingLogo}
                    alt="watch"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[26px] translate-y-10">
                <div className="max-w-[203px]">
                  <img
                    className="w-full  rounded-[12.59px] shadow-whatwedo relative"
                    width={203}
                    height={219}
                    src={dollarred}
                    alt="watch"
                  />
                  <img
                    className="absolute -top-[30%] -left-[8%]"
                    src={manavatar}
                    alt=""
                  />
                </div>
                <div className="max-w-[203px]">
                  <img
                    className="w-full  rounded-[12.59px] shadow-whatwedo"
                    width={203}
                    height={151}
                    src={Teamup}
                    alt="watch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 pt-[100px]"></div>
      </div>
    </div>
  );
};

export default Strategy;
