import React from "react";
import { BlueHeading } from "./common/Heading";
import { SubHeading } from "./common/SubHeading";
import customerfocus from "../assets/images/webp/portfolie-card/customer-focus.webp";
import { WhiteLogo } from "./common/Icon";
const CustomerFocus = () => {
  return (
    <div className="bg-darkpurple pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[77px] pb-[144px]">
      <div className="container max-w-[1164px] pb-[70px] sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[96px]">
        <div className="flex lg:flex-row flex-col-reverse flex-wrap -mx-3 items-center">
          <div className="w-full lg:w-1/2 px-3 max-lg:pt-6">
            <SubHeading
              className="text-white max-lg:text-center max-lg:!mb-1"
              text="FOX philosophy"
            />
            <BlueHeading
              className="text-white lg:!text-5xl xl:!text-6xxl max-lg:text-center"
              headingText="Customer Focus"
            />
            <p className="font-poppins font-normal text-base md:text-lg lg:text-xl text-white !leading-normal lg:max-w-[481px] mt-2.5 sm:mt-3 md:mt-4 lg:mt-[21px] max-lg:max-w-[550px] max-lg:mx-auto max-lg:text-center">
              The customer is our focus. We do everything we can to provide our
              customers with individual, needs-based advice.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <div className=" max-lg:max-w-[425px] lg:max-w-[556px] max-lg:mx-auto">
              <img
                className="w-full"
                width={556}
                height={371}
                src={customerfocus}
                alt="customer-focus"
              />
            </div>
          </div>
        </div>
        <span className="flex justify-center mt-12 sm:mt-16 xl:mt-[78px]">
          <WhiteLogo className="lg:w-[141px] cursor-pointer lg:h-[132px] sm:w-[121px] sm:h-[101px] h-[81px] w-[101px]" />
        </span>
      </div>
    </div>
  );
};

export default CustomerFocus;