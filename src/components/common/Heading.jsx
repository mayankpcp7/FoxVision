import React from "react";

const Heading = ({ heading, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat text-4xl md:text-5xl lg:text-6xxl !leading-md text-darkblue`}
    >
      {heading}
    </h2>
  );
};

export default Heading;
