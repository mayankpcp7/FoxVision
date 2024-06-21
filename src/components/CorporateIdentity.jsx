import React from "react";
import { BlueHeading } from "./common/Heading";
import corporate from "../assets/images/webp/corporateidentity/corporate.webp";
import { Identity, PurpleArrow } from "./common/Icon";
import Button from "./common/Button";
import { Link } from "react-router-dom";

const CorporateIdentity = () => {
  return (
    <div className="pt-12 sm:pt-14 md:pt-[80px] lg:pt-24 xl:pt-[126px]">
      <div className="max-w-[1164px] mx-auto px-3">
        <div className="flex flex-row flex-wrap lg:justify-between justify-center items-center">
          <div className="lg:w-5/12 flex flex-col lg:items-start items-center w-full relative">
            <PurpleArrow
              className="absolute -right-[12%] top-[2%] xl:w-[157px] xl:h-[125px] w-[120px] lg:block hidden animate-pulse"
            />
            <BlueHeading
              headingText="Corporate identity"
              className="xl:!leading-xl leading-normal lg:mb-[17px] mb-6"
            />
            <img
              width={465}
              height={349}
              src={corporate}
              alt="corporate"
              className="md:max-w-[465px] max-h-[349px] max-w-[310px]"
              data-aos="fade-up"
            />
          </div>
          <div className="lg:w-6/12 sm:w-8/12 w-full lg:pt-0 pt-7">
            <div
              className="sm:w-[93px] sm:h-[93px] w-[83px] h-[83px] rounded-[6px] bg-lightsky shadow-identityicon flex items-center justify-center mb-[15px] lg:mx-0 mx-auto"
              data-aos="fade-left"
            >
              <Identity className="sm:w-[55px] sm:h-[45px] w-[45px] h-[35px]" />
            </div>
            <div data-aos="fade-left">
              <p className="lg:max-w-[552px] font-poppins font-normal lg:text-xl text-base lg:text-start text-center opacity-70 !leading-lg lg:mb-[35px] sm:mb-7 mb-6">
                Many people primarily associate logo and colors with it.
                Corporate identity is much more. Corporate identity, together
                with{" "}
                <span className="text-purple cursor-pointer">
                  corporate design
                </span>
                , forms the character of your company. Give your company a face
                and awaken emotions and trust in your customers.
                <span className="text-purple uppercase cursor-pointer">
                  {" "}
                  FOX VISION
                </span>{" "}
                would be happy to develop your corporate identity.
              </p>
            </div>
            <Link to="/contact" data-aos="fade-left">
              <Button
                className="lg:mx-0 mx-auto flex max-lg:justify-center"
                btnName="Contact"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateIdentity;
