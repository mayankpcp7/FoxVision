import React from "react";
import { Link } from "react-router-dom";

const AngebotCardsList = (props) => {
  return (
    <div
      className={`${props.className} sm:pt-[26.83px] sm:px-[26.81px] sm:pb-[35.24px] p-6 bg-white rounded-[6px] lg:max-w-[366px] w-full h-full xl:min-h-[383px] flex justify-between flex-col relative hover:shadow-[0_0_11px_rgba(255,255,255,1)] transition-all ease-linear duration-300 group`}
    >
      <div>
        <div
          className={`${
            props.bgCardSvg
              ? "bg-lightpurple shadow-[0px_10px_20px_0px_#4B17E62B]"
              : "bg-lightsky shadow-[0px_11.57px_23.15px_0px_#05D5FB29]"
          } sm:w-[85.27px] sm:h-[85.27px] w-[75px] h-[75px] rounded-[6.94px] shadow-[0px 10px 20px 0px #4B17E62B] sm:mb-[27px] mb-5 flex justify-center items-center`}
        >
          {props.svg}
        </div>
        <h3 className="text-black capitalize font-poppins sm:text-2xl text-xl leading-normal font-semibold mb-2">
          {props.title}
        </h3>
        <p className="text-black opacity-70 font-poppins sm:text-base text-sm font-normal leading-normal xl:mb-[44.67px] lg:mb-[38px] sm:mb-8 mb-6">
          {props.description}
        </p>
      </div>
      <Link
        className={`${
          props.cardLink ? "xl:!bottom-10" : ""
        } text-darkpurple xl:absolute xl:bottom-14 bottom-7 flex items-center gap-[10px] opacity-70 font-poppins font-normal sm:text-base text-sm`}
        href="/"
      >
        {props.cardBtn}
        {props.arrow}
      </Link>
    </div>
  );
};

export default AngebotCardsList;
