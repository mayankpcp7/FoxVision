import React from "react";
import { DesignCardArray } from "./common/Helper";

const Design = () => {
  return (
    <div className="pt-6 sm:pt-10 md:pt-20 lg:pt-24 xl:pt-[130px] max-sm:pb-12">
      <div className="container max-w-[1164px]">
        <div className="flex flex-wrap flex-row -mx-3 max-lg:max-w-[815px] max-lg:mx-auto">
          {DesignCardArray.map((obj, index) => (
            <div
              key={index}
              className="w-full xs:w-1/2 lg:w-1/4 px-3 max-lg:pt-6"
              data-aos="zoom-in"
            >
              <div className="bg-white p-[22px_10px] rounded-md shadow-designcardshadow group duration-300">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="object-cover w-full lg:max-w-[248px] max-h-[182px] group-hover:scale-105 duration-300 "
                    width={248}
                    height={182}
                    src={obj.src}
                    alt={obj.alt}
                  />
                </div>
                <p className="font-poppins font-semibold text-base lg:text-xl text-darkblue !leading-normal lg:!leading-md text-center mt-3">
                  {obj.heading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
