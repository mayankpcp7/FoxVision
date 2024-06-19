import React from "react";
import { BlueHeading } from "./common/Heading";
import project from "../assets/images/webp/project-agency/project.webp";
import logo from "../assets/images/webp/project-agency/agency-logo.webp";
import Button from "./common/Button";
import { PurpleArrow } from "./common/Icon";
import { SubHeading } from "./common/SubHeading";
import { Link } from "react-router-dom";

const DesignProjectAgency = () => {
  return (
    <div className="xl:pt-[126.27px] xl:pb-[150px] py-12 sm:py-14 md:py-[80px] lg:py-24">
      <div className="container xl:max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-row justify-center flex-wrap items-end">
          <div className="lg:w-6/12 w-full relative flex flex-col lg:items-start items-center">
            <PurpleArrow className="absolute xl:-right-[12%] xl:top-[15%] top-[12%] -right-[23%] xl:w-[157px] xl:h-[125px] w-[120px] lg:block hidden" />
            <SubHeading text="FOX VISION" className="lg:!mb-3 sm:!mb-0 !mb-1" />
            <BlueHeading
              className="!leading-xl !capitalize mb-[29px] lg:text-start text-center"
              headingText="Design Project Agency"
            />
            <img
              width={564}
              height={328}
              src={project}
              alt="project"
              className="w-full xl:max-w-[564px] max-w-[480px]"
            />
          </div>
          <div className="lg:w-6/12 sm:w-10/12 w-full flex justify-end lg:pt-0 pt-8">
            <div className="xl:pb-[50.61px]">
              <img
                width={70.9}
                height={85.39}
                src={logo}
                alt="logo"
                className="lg:ml-auto max-lg:mx-auto lg:mb-5 mb-4 sm:w-[70.9px] w-[60px]"
              />
              <p className="lg:max-w-[511px] font-poppins text-darkblue opacity-70 font-normal lg:text-xl text-base lg:mb-10 sm:mb-8 mb-6 !leading-lg lg:text-start text-center">
                As a design agency, we create a contemporary and
                <span className="text-sky cursor-pointer">
                  {" "}
                  distinctive appearance
                </span>{" "}
                for you. Style is more in demand than ever. We help you show
                your best side to your customers.{" "}
                <span className="text-sky cursor-pointer">
                  Strong branding sets
                </span>{" "}
                you apart from your competition and creates trust and
                seriousness.
              </p>
              <Link to="/contact">
                <Button btnName="Contact" className="max-lg:mx-auto flex" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProjectAgency;
