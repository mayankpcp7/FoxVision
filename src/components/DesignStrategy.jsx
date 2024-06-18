import React from "react";
import { BlueHeading } from "./common/Heading";
import Designstrategy from "../assets/images/webp/offer-design-strategy/design-strategy.webp";
const DesignStrategy = () => {
  return (
    <div className="pt-[150px] pb-[200px]">
      <div className="container max-w-[1164px]">
        <div className="flex flex-row -mx-3">
          <div className="max-w-[521px] px-3">
            <BlueHeading headingText="UI/UX Design Strategy" />
            <p className="font-poppins font-normal text-base lg:text-xl text-darkblue !leading-normal lg:!leading-lg opacity-70 !max-w-[484px] mt-5">
              Our design process is a{" "}
              <span className="text-sky">well-thought-out journey</span> that
              combines innovation, strategy, and collaboration to produce
              outstanding results.
            </p>
            <div className="max-w-[451px] mt-[45px]">
              <img
                width={451}
                height={358}
                className="w-full"
                src={Designstrategy}
                alt="designstrategy"
              />
            </div>
          </div>
          <div className="max-w-[635px] px-3">
            <div className="w-full bg-white shadow-designcardshadow p-[27px_23px_26px_131px] relative before:absolute before:top-0 before:-left-5 customBefore">
              <p className="font-montserrat font-semibold text-4xxl !leading-md text-white absolute bottom-[26px] left-5">
                1.
              </p>
              <div>
                <p className="font-poppins font-semibold text-base lg:text-xl text-darkblue !leading-normal lg:!leading-md mt-3">
                  Research and Analysis
                </p>
                <p className="font-poppins font-normal text-base text-darkblue !leading-normal lg:!leading-lg opacity-70 mt-[15px]">
                  Our team conducts thorough research, including market and
                  competitor analysis, to inform our design decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStrategy;
