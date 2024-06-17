import React from "react";
import {
  LogoDesignIcon,
  LogoDesignVectorWhite,
  StrategySettingIcon,
} from "./common/Icon";
import logoDesign from "../assets/images/webp/Strategy/logo-design.webp";
import dollarred from "../assets/images/webp/Strategy/dollar-red.webp";
import brandingLogo from "../assets/images/webp/Strategy/branding-logo.webp";
import Teamup from "../assets/images/webp/Strategy/team-up.webp";
import manavatar from "../assets/images/webp/Strategy/man-avatar-like.webp";
import strategyimg from "../assets/images/webp/Strategy/Startegy-digital.webp";
const Strategy = () => {
  return (
    <div className="pt-20 lg:pt-36 xl:pt-[193px] pb-[60px] bg-darkpurple">
      <div className="container max-w-[1164px]">
        <div className="flex lg:flex-row flex-wrap -mx-3 flex-col-reverse">
          <div className="w-full lg:w-5/12 px-3 max-lg:pt-20">
            <div className="flex justify-center items-center max-md:w-[70px] max-md:h-[70px] w-[93px] h-[93px] bg-white rounded-lg max-lg:mx-auto">
              <LogoDesignIcon />
            </div>
            <p className=" font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-white !leading-normal mt-4 sm:mt-5 md:mt-[29px] max-lg:text-center ">
              Logo Design
            </p>
            <p className=" font-poppins font-normal text-base md:text-lg lg:text-xl text-white !leading-normal max-w-[421px] opacity-70 mt-2 max-lg:mx-auto max-lg:text-center">
              Logo design is a specialized discipline within the realm of
              graphic design, focused on creating unique and memorable visual
              symbols that represent a brand, company, or organization.
            </p>
          </div>
          <div className="w-full lg:w-7/12 px-3 max-lg:max-w-[547px] max-lg:mx-auto max-lg:pt-12">
            <div className="flex items-center justify-center relative z-[1]  gap-2.5 sm:gap-4 md:gap-[22px]">
              <span className="absolute bottom-0 -right-[3%] sm:right-0 lg:right-[3%] z-[-1] max-md:max-w-[313px] pointer-events-none">
                <LogoDesignVectorWhite />
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-[26px]">
                <div className="max-w-[203px]">
                  <img
                    className="w-full rounded-[12.59px] shadow-whatwedo"
                    width={203}
                    height={219}
                    src={logoDesign}
                    alt="watch"
                  />
                </div>
                <div className="max-w-[203px]">
                  <img
                    className="w-full rounded-[12.59px] shadow-whatwedo"
                    width={203}
                    height={219}
                    src={brandingLogo}
                    alt="watch"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-[26px] translate-y-10">
                <div className="max-w-[203px]">
                  <img
                    className="w-full rounded-[12.59px] shadow-whatwedo relative"
                    width={203}
                    height={219}
                    src={dollarred}
                    alt="watch"
                  />
                  <img
                    width={194}
                    height={194}
                    className="absolute -top-[35%] -left-[8%] pointer-events-none max-w-[150px] sm:max-w-[194px]"
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
        <div className="flex flex-row flex-wrap -mx-3 pt-20 md:pt-[110px] justify-between items-center">
          <div className="w-full lg:w-6/12 px-3">
            <div className="max-w-[495px] max-lg:mx-auto ">
              <img
                className="w-full"
                width={495}
                height={529}
                src={strategyimg}
                alt="Strategy"
              />
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-3 max-lg:pt-14">
            <div className=" lg:ps-5">
              {" "}
              <div className="flex justify-center items-center max-md:w-[70px] max-md:h-[70px] w-[93px] h-[93px] bg-white rounded-lg max-lg:mx-auto">
                <StrategySettingIcon />
              </div>
              <p className=" !font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-white !leading-normal mt-4 sm:mt-5 md:mt-[29px]  max-lg:text-center ">
                Strategy & Digital Marketing
              </p>
              <p className=" font-poppins font-normal text-base md:text-lg lg:text-xl text-white !leading-normal max-w-[445px] opacity-70 mt-2 max-lg:mx-auto max-lg:text-center">
                Strategy in digital marketing is the foundation upon which
                successful online campaigns are built. It involves setting clear
                objectives, identifying target audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;