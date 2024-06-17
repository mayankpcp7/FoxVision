import React from "react";
import { BlueHeading } from "./common/Heading";
import project from "../assets/images/webp/project-agency/project.webp";
import logo from "../assets/images/webp/project-agency/agency-logo.webp";

const DesignProjectAgency = () => {
  return (
    <div className="pt-[126.27px]">
      <div className="container xl:max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap">
          <div className="w-6/12">
            <p className="uppercase text-darkblue font-poppins font-bold text-xl leading-normal mb-3">
              FOX VISION
            </p>

            <BlueHeading
              className="!leading-xl mb-[29px]"
              headingText="Design Project Agency"
            />
            <img width={564} height={328} src={project} alt="project" />
          </div>
          <div className="w-6/12">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProjectAgency;
