import React from "react";
import Navbar from "./Navbar";
import { WhiteHeading } from "./Heading";
import monitor from "../../assets/images/webp/hero/monitor.webp";
import { useLocation } from "react-router-dom";

const Hero = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  if (currentPath === "/") {
    return (
      <div className="bg-darkpurple pt-5">
        <Navbar />
        <div className="pt-16 flex flex-col items-center pb-14 mb-1 px-3">
          <WhiteHeading boldText="FOX " normalText="Vision" />
          <WhiteHeading normalText=" Ihre Design Agentur!" />
          <p className="text-center font-poppins text-sm sm:text-lg md:text-xl xl:text-2xl pt-2 sm:pt-4 lg:pt-6 xl:pt-9 text-white">
            Kreativagentur für Branding, Social Media & digitale Lösungen
          </p>
          <img
            className="max-w-[714px] ms-10 mt-3 sm:mt-0 w-full"
            src={monitor}
            alt="monitor"
          />
        </div>
      </div>
    );
  }
};

export default Hero;
