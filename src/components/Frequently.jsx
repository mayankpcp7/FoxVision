import React, { useState } from "react";
import { BlueHeading } from "./common/Heading";
import { FaqArrow } from "./common/Icon";
import { accordionData } from "./common/Helper";

const Frequently = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="xl:py-[150px] py-12 sm:py-14 md:py-[80px] lg:py-24">
      <div className="container xl:max-w-[1164px] mx-auto px-3">
        <BlueHeading
          headingText="Frequently Asked Questions"
          className="mb-[50px] text-center"
        />
              <div className="flex flex-col w-full sm:gap-[18px] gap-3 max-w-[740px] mx-auto">
                  
        </div>
      </div>
    </div>
  );
};

export default Frequently;
