import React, { useState } from "react";
import { portfoliosArray } from "./common/Helper";
import Button from "./common/Button";

const PortfolioCard = () => {
  const [show, setShow] = useState(11);
  function viewShow() {
    if (show === 11) {
      setShow(15);
    } else {
      setShow(11);
    }
  }
  return (
    <div className=" pt-6 sm:pt-12 md:pt-24 lg:pt-20 xl:pt-[99px] pb-20 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[147px]">
      {" "}
      <div className="container max-w-[1164px] pb-[147px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <>
            {portfoliosArray.slice(0, show).map((obj, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-3 pt-6">
                <div className="border border-gray p-2 lg:py-[15px] lg:px-[17px] rounded-md h-full max-sm:max-w-[364px] max-sm:mx-auto duration-300 hover:shadow-portfoliocardshadow group">
                  <div className="max-sm:max-w-full rounded-md max-w-[330px] overflow-hidden">
                    <img
                      width={330}
                      height={311}
                      className="w-full object-cover group-hover:scale-105 duration-300"
                      src={obj.src}
                      alt={obj.alt}
                    />
                  </div>
                  <p className="font-poppins font-bold text-lg lg:text-xl text-darkblue !leading-normal mt-2 lg:mt-3">
                    {obj.heading}
                  </p>
                  <p className="font-poppins font-normal text-sm lg:text-base text-darkblue !leading-normal mt-2 lg:mt-2.5">
                    {obj.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </>
        </div>
        <Button
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] mx-auto block"
          btnName={show === 11 ? "See More" : "See Less"}
          fun={viewShow}
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
