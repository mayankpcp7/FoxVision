import { Link } from "react-router-dom";
import { BlueHeading } from "./Heading";
import { CommonLogo, VectoArrow } from "./Icon";
import { SubHeading } from "./SubHeading";
import Button from "./Button";

export const WhatWeDoCommon = (props) => {
  return (
    <div className="flex flex-row flex-wrap -mx-3">
      <div className="w-full lg:w-1/2 px-3 relative">
        <span className={`absolute pointer-events-none ${props.classNameIcon}`}>
          <VectoArrow />
        </span>
        <SubHeading
          className="max-lg:text-center max-sm:!mb-1"
          text={props.SubheadingText}
        />
        <BlueHeading
          className="max-lg:text-center"
          headingText={props.BlueHeadingText}
        />
        <div className="max-lg:max-w-[590px] xl:min-w-[590px] lg:-translate-x-5 mt-5 md:mt-8 lg:mt-[49px] max-lg:mx-auto relative">
          <img
            className="w-full object-cover"
            width={590}
            height={390}
            src={props.src}
            alt="what-we-do"
          />
          <div className="pointer-events-none absolute top-[24%] left-[4%] flex items-center z-[-1]">
            <span
              className={`${props.className} block w-[203px] h-[203px] opacity-20 blur-[100px] bg-darkpurple rounded-[203px]`}
            ></span>
            <span
              className={`${props.className} block w-[203px] h-[203px] opacity-20 blur-[100px] bg-sky rounded-[203px]`}
            ></span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-3 pt-10 lg:pt-16">
        <div
          className={`max-lg:max-w-[560px] lg:max-w-[511px] max-lg:mx-auto lg:ms-auto`}
        >
          <span className="max-md:max-w-[50px] max-w-[70px] max-md:max-h-[55px] max-h-[85px] max-lg:mx-auto lg:ms-auto block">
            <CommonLogo />
          </span>
          <p
            className={`${props.className} font-poppins font-normal text-base lg:text-xl text-darkblue !leading-normal lg:!leading-lg opacity-70 max-lg:text-center mt-5`}
          >
            {props.paragraphFirst}
            <Link href="#" className="text-purple">
              {props.linkText}
            </Link>
            {props.paragraphSecond}
          </p>
          <Link aria-label="contact" to="/contact">
            <Button
              className="mt-6 sm:mt-8 xl:mt-10 max-lg:mx-auto block"
              btnName="Contact"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
