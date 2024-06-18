import React from "react";
import { BlueHeading } from "./common/Heading";

const CorporateIdentity = () => {
  return (
    <div className="pt-12 sm:pt-14 md:pt-[80px] lg:pt-24 xl:pt-[126px]">
      <div className="max-w-[1164px] mx-auto px-3">
        <div className="w-6/12">
          <BlueHeading
            headingText="Corporate identity"
            className="!leading-xl mb-[17px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CorporateIdentity;
