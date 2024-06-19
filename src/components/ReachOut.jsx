import React from "react";
import { Link } from "react-router-dom";
import { BlueHeading } from "./common/Heading";
import { ContactUsCardArray } from "./common/Helper";
import { SubHeading } from "./common/SubHeading";

const ReachOut = () => {
  return (
    <div className="pb-[200px] pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[118px]">
      <div className="container max-w-[1164px]">
        <SubHeading
          className="text-center"
          text="FOX VISION - Friendly and reliable"
        />
        <BlueHeading
          className="text-center"
          headingText="More Ways to Reach Out"
        />
        <div className="flex flex-row flex-wrap -mx-3 mt-6 sm:mt-8 md:mt-10 lg:mt-[56px] max-lg:justify-center">
          {ContactUsCardArray.map((obj, index) => (
            <div
              key={index}
              className=" w-full sm:w-1/2 lg:w-1/3 px-3 pt-6 sm:pt-8 "
            >
              <div className="bg-white shadow-designcardshadow pt-10 pb-7 text-center max-w-[364px] mx-auto hover:-translate-y-[38px] group duration-500 h-full flex flex-col">
                <Link
                  target="blank"
                  to={obj.href}
                  aria-label={obj.arialabe}
                  className="bg-contactUsCard group-hover:bg-darkpurple duration-300 w-[85px] h-[85px] rounded-[7px] mx-auto flex justify-center items-center shadow-contactusIconshadow"
                >
                  {obj.icon}
                </Link>
                <Link
                  target="blank"
                  to={obj.href}
                  aria-label={obj.arialabeone}
                  className="font-poppins font-semibold text-2xl !leading-normal mt-[25px] "
                >
                  {obj.contactus}
                </Link>
                <Link
                  target="blank"
                  to={obj.href}
                  aria-label={obj.arialabetwo}
                  className="font-poppins font-normal text-base !leading-normal mt-[15px] max-w-[280px] mx-auto"
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
