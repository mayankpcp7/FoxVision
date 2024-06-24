import React, { useState, useRef, useEffect } from "react";
import { BlueHeading } from "./common/Heading";
import { FaqArrow } from "./common/Icon";
import { accordionData } from "./common/Helper";

const Frequently = () => {
  const [openAccordion, setOpenAccordion] = useState(0); 
  const [contentHeight, setContentHeight] = useState({});

  const refs = useRef([]);

  useEffect(() => {
    const heights = {};
    refs.current.forEach((ref, index) => {
      if (ref) {
        heights[index] = ref.scrollHeight;
      }
    });
    setContentHeight(heights);
  }, [refs, openAccordion]);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="xl:pt-[150px] pt-12 sm:pt-14 md:pt-[80px] lg:pt-24 xl:pb-[264px] lg:pb-[200px] sm:pb-[180px] pb-[200px]">
      <div className="max-w-[1164px] mx-auto px-3">
        <BlueHeading
          headingText="Frequently Asked Questions"
          className="lg:mb-[50px] md:mb-12 mb-7 text-center"
        />
        <div className="flex flex-col xl:max-w-[970px] md:w-10/12 w-full mx-auto">
          {accordionData.map((item, index) => (
            <div
              className="accordion-item border border-solid border-[#00000033] sm:pl-[21px] sm:pr-[30px] px-3 py-5 sm:mb-5 mb-4 rounded-[6px] transition-all duration-300 ease-in-out"
              key={index}
              data-aos="zoom-in-up"
            >
              <div
                className="accordion-title flex justify-between sm:items-center items-start cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="font-montserrat font-semibold text-darkblue !leading-md xl:text-2xl md:text-xl text-base">
                  {item.title}
                </p>
                <div className="sm:pt-0 pt-2">
                  <div
                    className={`${
                      openAccordion === index ? "rotate-180" : ""
                    } transition-transform duration-300 ease-linear`}
                  >
                    <FaqArrow className="sm:w-[19px] sm:h-3 w-[17px] h-[10px]" />
                  </div>
                </div>
              </div>
              <div
                className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  height:
                    openAccordion === index
                      ? `${contentHeight[index]}px`
                      : "0px",
                  opacity: openAccordion === index ? 1 : 0,
                }}
              >
                <div
                  className="pt-[15px] font-poppins font-normal md:text-xl sm:text-base text-sm text-darkblue opacity-70 sm:max-w-[859px] !leading-lg"
                  ref={(el) => (refs.current[index] = el)}
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequently;
