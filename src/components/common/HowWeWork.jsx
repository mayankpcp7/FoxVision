import React from "react";
import work from "../../assets/images/webp/how-we-work/work-img.webp";
import Button from "./Button";
import { WorkArrow } from "../common/Icon";
import { howWeWorkCardlist } from "./Helper";
import HowWeWorkCards from "./HowWeWorkCards";
import { BlueHeading } from "./Heading";

const HowWeWork = () => {
  return (
    <div className="xl:pt-[144.76px] xl:pb-[126.85ox] md:py-[90px] sm:py-[65px] py-[50px]">
      <div className="container xl:max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap justify-between items-end">
          <div className="lg:w-6/12 w-full relative">
            <WorkArrow className="absolute xl:-right-[14%] xl:top-[16%] top-[11%] -right-[24%] max-xl:max-w-[140px] lg:block hidden" />
            <p className="uppercase font-poppins text-darkblue font-bold sm:text-xl text-sm leading-normal mb-3">
              A RESULTS-DRIVEN AGENCY
            </p>
            <BlueHeading headingText="How we work" className="mb-[26.95px]" />
            <img
              width={378}
              height={294}
              src={work}
              alt="work"
              className="w-full sm:max-w-[378px] max-w-[310px]"
            />
          </div>
          <div className="lg:w-6/12 w-full mb-[10px] flex justify-end lg:pt-0 pt-6">
            <div>
              <p className="font-normal font-poppins sm:text-xl text-base leading-normal text-darkblue opacity-70 lg:max-w-[481px] lg:mb-10 sm:mb-7 mb-6">
                We see our customers as partners and identify passionately with
                their companies. Regardless of what the goal is, whether to
                increase sales, increase brand awareness or attract new
                employees. We always look for the
                <span className="text-sky">
                  right solution for your company
                </span>
                and advise you individually
              </p>
              <Button btnName="Contact" />
            </div>
          </div>
        </div>
        <div className="flex flex-row xl:gap-[17px] lg:gap-[15px] md:gap-5 sm:gap-3 gap-4 justify-center flex-wrap xl:pt-[126px] md:pt-[70px] sm:pt-[55px] pt-10">
          {howWeWorkCardlist.map((obj, index) => (
            <div
              className="lg:w-[32.3%] md:w-[45%] sm:w-[49%] w-full"
              key={index}
            >
              <HowWeWorkCards
                className={index === 1 ? "bg-lightsky" : "bg-lightpurple"}
                svg={obj.svg}
                title={obj.title}
                description={obj.description}
                cardBox={index === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
