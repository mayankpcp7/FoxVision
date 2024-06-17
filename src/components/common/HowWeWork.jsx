import React from "react";
import work from "../../assets/images/webp/how-we-work/work-img.webp";
import Button from "./Button";
import {BlueHeading} from "./Heading"

const HowWeWork = () => {
  return (
    <div className="pt-[144.76px]">
      <div className="container xl:max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap justify-between items-end">
          <div className="w-6/12">
            <p className="uppercase font-poppins text-darkblue font-bold text-xl leading-normal mb-3">
              A RESULTS-DRIVEN AGENCY
            </p>
            <BlueHeading headingText="How we work" className="mb-[26.95px]" />
            <img width={378} height={294} src={work} alt="work" />
          </div>
          <div className="w-6/12 mb-[10px] flex justify-end">
            <div>
              <p className="font-normal font-poppins text-xl leading-normal text-darkblue opacity-70 lg:max-w-[481px] mb-10">
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
      </div>
    </div>
  );
};

export default HowWeWork;
