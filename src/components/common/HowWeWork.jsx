import React from "react";
import work from "../../assets/images/webp/how-we-work/work-img.webp";
import Button from "./Button";
import { WorkArrow } from "../common/Icon";
import { howWeWorkCardlist } from "./Helper";
import HowWeWorkCards from "./HowWeWorkCards";
import { BlueHeading } from "./Heading";
import { SubHeading } from "./SubHeading";

const HowWeWork = () => {
  return (
    <div className="xl:pt-[144.76px] xl:pb-[126.85ox] lg:py-24 md:py-[80px] sm:py-14 py-12">
      <div className="max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap lg:justify-between justify-center items-end">
          <div className="lg:w-6/12 w-full relative flex flex-col lg:items-start items-center">
            <WorkArrow className="absolute xl:-right-[14%] xl:top-[16%] top-[11%] -right-[24%] max-xl:max-w-[140px] lg:block hidden" />
            <SubHeading
              text="A RESULTS-DRIVEN AGENCY"
              className="xl:!mb-3 sm:!mb-0 !mb-1"
            />
            <BlueHeading headingText="How we work" className="mb-[26.95px] !leading-xl" />
            <img
              width={378}
              height={294}
              src={work}
              alt="work"
              className="w-full sm:max-w-[378px] max-w-[310px]"
            />
          </div>
          <div className="lg:w-6/12 sm:w-9/12 w-full mb-[10px] flex lg:justify-end lg:pt-0 pt-6">
            <div>
              <p className="font-normal font-poppins sm:text-xl text-base leading-normal text-darkblue opacity-70 lg:max-w-[481px] lg:mb-10 sm:mb-7 mb-6 lg:text-start text-center">
                We see our customers as partners and identify passionately with
                their companies. Regardless of what the goal is, whether to
                increase sales, increase brand awareness or attract new
                employees. We always look for the 
                <span className="text-sky"> right solution for your company 
                </span> and advise you individually
              </p>
              <Button
                className="lg:mx-0 mx-auto flex max-lg:justify-center"
                btnName="Contact"
              />
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
