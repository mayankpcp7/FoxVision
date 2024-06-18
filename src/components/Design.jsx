import React from "react";
import { DesignCardArray } from "./common/Helper";

const Design = () => {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[130px]">
      <div className="container max-w-[1164px]">
        <div className="flex flex-wrap flex-row -mx-3">
          {DesignCardArray.map((obj, index) => (
            <div
              key={index}
              className="w-full xs:w-1/2 lg:w-1/4 px-3 max-lg:pt-6"
            >
              <div className="bg-white p-[22px_10px] rounded-md shadow-designcardshadow">
                <img
                  className="rounded-md object-cover w-full lg:max-w-[248px] max-h-[182px] "
                  width={248}
                  height={182}
                  src={obj.src}
                  alt={obj.alt}
                />
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
