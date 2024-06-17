import React from "react";

const Button = ({ btnName, className }) => {
  return (
    <div>
      <button
        className={`${className} py-[14px] px-[30px] bg-sky rounded-[69px] text-white font-semibold sm:text-base text-sm leading-normal`}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
