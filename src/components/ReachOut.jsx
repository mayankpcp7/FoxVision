import React from "react";
import { Link } from "react-router-dom";
import { BlueHeading } from "./common/Heading";
import { ContactUsCardArray } from "./common/Helper";
import { SubHeading } from "./common/SubHeading";

const ReachOut = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:pt-[118px] xl:pb-[165px]">
      <div className="container max-w-[1164px]">
        <SubHeading
          className="text-center !normal-case max-sm:mb-1"
          text="FOX VISION - Friendly and reliable"
        />
        <BlueHeading
          className="text-center"
          headingText="More Ways to Reach Out"
        />
        <div className="flex flex-row flex-wrap -mx-3 mt-4 sm:mt-8 md:mt-10 lg:mt-[56px] max-lg:justify-center">
          {ContactUsCardArray.map((obj, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-3 pt-6 sm:pt-8"
              data-aos="zoom-in-up"
            >
              <div className="bg-white shadow-designcardshadow pt-7 pb-5 sm:pt-10 sm:pb-7 text-center max-w-[364px] mx-auto hover:-translate-y-[38px] group duration-500 xl:max-h-[265px] h-full flex flex-col">
                <Link
                  target="_blank"
                  to={obj.href}
                  aria-label={obj.ariaLabel}
                  className="bg-contactUsCard group-hover:bg-darkpurple duration-300 w-16 sm:w-[85px] h-16 sm:h-[85px] rounded-[7px] mx-auto flex justify-center items-center shadow-contactusIconshadow"
                >
                  {obj.icon}
                </Link>
                <Link
                  target="_blank"
                  to={obj.href}
                  aria-label={obj.ariaLabelOne}
                  className="font-poppins font-semibold text-lg sm:text-xl md:text-2xl !leading-normal pt-5 sm:mt-[25px]"
                >
                  {obj.contactus}
                </Link>
                <Link
                  target="_blank"
                  to={obj.href}
                  aria-label={obj.ariaLabelTwo}
                  className="font-poppins font-normal text-sm sm:text-base !leading-normal pt-3 sm:mt-[15px] max-w-[280px] mx-auto"
                >
                  {obj.contactid}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
