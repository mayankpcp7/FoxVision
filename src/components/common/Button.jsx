import React from "react";

const Button = ({ btnName, className }) => {
  return (
    <button
      className={`${className} font-poppins sm:py-[14px] sm:px-[30px] py-3 px-7 bg-sky rounded-[69px] text-white font-semibold sm:text-base text-sm leading-normal`}
    >
      {btnName}
    </button>
  );
};

export default Button;
