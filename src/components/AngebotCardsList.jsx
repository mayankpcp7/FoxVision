import React from "react";
import { Link } from "react-router-dom";

const AngebotCardsList = (props) => {
  return (
    <div className="pt-[26.83px] px-[26.81px] pb-[35.24px] bg-white rounded-[6px] max-w-[366px] w-full h-full xl:min-h-[383px]">
      <div
        className={`${
          props.bgCardSvg
            ? "bg-lightpurple shadow-[0px_10px_20px_0px_#4B17E62B]"
            : "bg-lightsky shadow-[0px_11.57px_23.15px_0px_#05D5FB29]"
        } w-[85.27px] h-[85.27px] rounded-[6.94px] shadow-[0px 10px 20px 0px #4B17E62B] sm:mb-[27px] mb-5 flex justify-center items-center`}
      >
        {props.svg}
      </div>
      <h3 className="text-black capitalize font-poppins sm:text-2xl text-xl leading-normal font-semibold mb-2">
        {props.title}
      </h3>
      <p className="text-black opacity-70 font-poppins sm:text-base text-sm font-normal leading-normal mb-[44.67px]">
        {props.description}
      </p>
      <Link
        className="text-darkpurple flex items-center gap-[10px] opacity-70 font-poppins font-normal sm:text-base text-sm"
        href="/"
      >
        {props.cardBtn}
        {props.arrow}
      </Link>
    </div>
  );
};

export default AngebotCardsList;
