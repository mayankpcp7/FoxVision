import React from "react";

const Heading = ({ heading, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat lg:text-6xxl md:text-5xl sm:text-4xl text-3xl leading-md text-darkblue`}
    >
      {heading}
    </h2>
  );
};

export default Heading;
