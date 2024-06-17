import React from "react";

const Button = ({ btnName, className }) => {
  return (
    <div>
      <button
        className={`${className} sm:py-[14px] sm:px-[30px] py-3 px-7 bg-sky rounded-[69px] text-white font-semibold sm:text-base text-sm leading-normal`}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
