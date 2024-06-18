import React from "react";
import { SubHeading } from "./common/SubHeading";
import mhillpaloka from "../assets/images/webp/project-agency/mhill-paloka.webp";

const FriendlyAndReliable = () => {
  return (
    <div className="max-w-[1164px] mx-auto px-3">
      <SubHeading
        text="FOX VISION - Friendly and reliable"
        className="text-center mb-3"
      />
      <h2 className="capitalize font-semibold font-montserrat xl:text-6xxl md:text-5xl sm:text-4xl text-3xl leading-md text-darkblue text-center lg:mb-[55px] sm:mb-12 mb-8 max-sm:px-1">
        Design Mastery <span className="lowercase">in</span> Our Genes
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="lg:p-[35px] sm:p-7 p-4 shadow-[0px_-8px_51px_8px_#00000012] flex lg:flex-row max-lg:max-w-[500px] flex-col-reverse flex-wrap items-center">
          <div className="lg:w-6/12 lg:pt-0 pt-8">
            <p className="capitalize text-darkblue font-poppins font-semibold sm:text-2xl text-xl leading-normal sm:mb-[15px] mb-3">
              Mhill Paloka
            </p>
            <p className="text-darkblue opacity-70 font-poppins font-normal xl:text-xl sm:text-base text-sm !leading-lg xl:max-w-[500px] lg:max-w-[430px]">
              Mhill Paloka deepened his know-how in the areas of purchasing,
              marketing and controlling in a large international company. He has
              also been a founding member of a facility management company since
              2009. Design has always been extremely important to him and he is
              happy to help you stay up to date.
            </p>
          </div>
          <div className="lg:w-6/12 w-full">
            <img
              width={530}
              height={392}
              src={mhillpaloka}
              alt="mhillpaloka"
              className="rounded-[6px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendlyAndReliable;
