import React from "react";

import { Paragraph } from "./common/Paragraph";
import { Heading } from "./common/Heading";
import whatWeDoImg from "../assets/images/webp/what-we-do/what-we-do.webp";
import { CommonLogo } from "./common/Icon";
const WhatWeDo = () => {
  return (
    <div className=" pt-[238px]">
      <div className="container max-w-[1164px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-1/2 px-3">
            <Paragraph text="A RESULTS-DRIVEN AGENCY" />
            <Heading text="What we do" />
            <div className="max-w-[590px] -translate-x-5">
              <img
                width={590}
                height={390}
                src={whatWeDoImg}
                alt="what-we-do"
              />
            </div>
          </div>
          <div className="w-1/2 px-3">
            <div className="max-w-[511px] ms-auto">
              <span>
                <CommonLogo />
              </span>
              <p className="font-poppins font-normal text-xl text-darkblue !leading-lg opacity-70 mt-5">
                We define the intangible assets of your brand and subsequently
                increase{" "}
                <span className="text-purple">
                  trust and loyalty to your brand.
                </span>{" "}
                Uniqueness, value proposition, clearly understandable core
                messages and an innovative design result in a brand personality
                that will be. We then transfer this genetic code to the relevant
                target groups cross-media via relevant channels. And we will
                reposition you profitably
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
