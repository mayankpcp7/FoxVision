import React from "react";
import { BlueHeading } from "./common/Heading";
import Designstrategy from "../assets/images/webp/offer-design-strategy/design-strategy.webp";
import { DesignStrategyArray } from "./common/Helper";
const DesignStrategy = () => {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[150px] max-sm:pb-12 max-md:pb-2.5">
      <div className="container max-w-[1164px]">
        <div className="flex flex-col lg:flex-row -mx-3">
          <div className="w-full lg:max-w-[525px] px-3" data-aos="fade-right">
            <BlueHeading
              className=" lg:!text-5xl xl:!text-6xxl max-lg:text-center"
              headingText="UI/UX Design Strategy"
            />
            <p className="font-poppins font-normal text-base lg:text-lg xl:text-xl text-darkblue !leading-normal xl:!leading-lg opacity-70 max-lg:max-w-[440px] lg:!max-w-[481px] mt-3 xl:mt-5 max-lg:mx-auto max-lg:text-center">
              Our design process is a
              <span className="text-sky"> well-thought-out journey</span> that
              combines innovation, strategy, and collaboration to produce
              outstanding results.
            </p>
            <div className="max-w-[451px] mt-[45px] max-lg:mx-auto">
              <img
                width={451}
                height={358}
                className="w-full max-h-[358px] object-cover"
                src={Designstrategy}
                alt="designstrategy"
              />
            </div>
          </div>
          <div className="w-full lg:max-w-[635px] max-sm:px-7 px-3 pt-8 sm:pt-10 lg:pt-0">
            {DesignStrategyArray.map((obj, index) => (
              <div
                key={index}
                className={`${
                  index === 0 && "!mt-0"
                } mt-10 md:mt-[50px] w-full bg-white shadow-designcardshadow max-[500px]:p-[10px_10px_10px_110px] p-[27px_23px_26px_131px] lg:p-[10px_10px_10px_131px] xl:p-[27px_23px_26px_131px] before:pointer-events-none relative min-[1105px]:before:h-[140px] max-xl:before:h-[140px] xl:before:!h-[164px] before:absolute before:top-0 before:-left-5 customBefore max-lg:max-w-[615px] max-lg:mx-auto before:w-full before:max-w-[120px] max-xl:before:bg-size xl:before:bg-cover before:h-[154px] lg:before:h-[164px] lg:before:max-w-[134px]`}
                data-aos="fade-left"
              >
                <p className="font-montserrat font-semibold text-4xl md:text-4xxl !leading-md text-white absolute left-5 max-lg:top-1/2 max-lg:-translate-y-1/2 lg:bottom-[26px] sm:left-5">
                  {obj.indexnumber}
                </p>
                <div>
                  <p className="font-poppins font-semibold sm:text-lg xl:text-xl text-darkblue !leading-normal lg:!leading-md">
                    {obj.heading}
                  </p>
                  <p className="font-poppins font-normal text-sm sm:text-base text-darkblue !leading-normal lg:!leading-lg opacity-70 mt-2.5 xl:mt-[15px]">
                    {obj.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStrategy;
