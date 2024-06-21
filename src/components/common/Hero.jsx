import React from "react";
import { WhiteHeading } from "./Heading";
import monitor from "../../assets/images/webp/hero/monitor.webp";
import { useLocation } from "react-router-dom";
import { PathArrow } from "./Icon";

const Hero = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/") {
    return (
      <div className="pt-16 flex flex-col items-center pb-14 px-3">
        <WhiteHeading boldText="FOX " normalText="Vision" />
        <WhiteHeading normalText=" Ihre Design Agentur!" />
        <p
          className="text-center font-poppins text-sm sm:text-lg md:text-xl xl:text-2xl pt-2 sm:pt-4 lg:pt-6 xl:pt-9 text-white"
          data-aos="fade-up"
        >
          Kreativagentur für Branding, Social Media & digitale Lösungen
        </p>
        <img
          className="max-w-[720px] xl:ms-12 mt-3 sm:mt-1 w-full"
          src={monitor}
          alt="monitor"
          data-aos="zoom-in-up"
        />
      </div>
    );
  } else if (
    currentPath === "/about" ||
    currentPath === "/contact" ||
    currentPath === "/portfolio" ||
    currentPath === "/offer"
  ) {
    let boldTitle;
    let normalTitle;
    let pathName;
    switch (currentPath) {
      case "/about":
        boldTitle = "About";
        normalTitle = " Us";
        pathName = "About Us";
        break;
      case "/contact":
        normalTitle = "Contact";
        boldTitle = " Us";
        pathName = "Contact Us";
        break;
      case "/portfolio":
        normalTitle = "Portfolio";
        pathName = "Portfolios";
        break;
      case "/offer":
        normalTitle = "Offer";
        pathName = "Offer";
        break;
      default:
        boldTitle = "";
        pathName = "";
    }

    return (
      <>
        <div className="pt-16 mt-3 flex flex-col items-center pb-24 px-3">
          {currentPath === "/contact" ? (
            <WhiteHeading
              className="flex flex-row-reverse gap-3"
              normalText={normalTitle}
              boldText={boldTitle}
            />
          ) : (
            <WhiteHeading boldText={boldTitle} normalText={normalTitle} />
          )}
        </div>
        <div className="flex gap-4 mb-[30px] max-w-[1164px] mx-auto px-3 items-center">
          <p className="text-white text-base font-poppins font-medium">Home</p>
          <PathArrow />
          <p className="text-white font-medium text-base font-poppins">
            {pathName}
          </p>
        </div>
      </>
    );
  }

  return null;
};

export default Hero;
