import React from "react";
import { WhiteHeading } from "./common/Heading";
import { angebotCardList } from "./common/Helper";
import AngebotCardsList from "./AngebotCardsList";

const Angebot = () => {
  return (
    <div className="bg-darkpurple pt-[122.94px] pb-[97.65px]">
      <div className="container xl:max-w-[1164px] px-3">
        <p className="uppercase text-white text-center font-poppins font-bold text-xl leading-normal mb-[13.27px]">
          A RESULTS-DRIVEN AGENCY
        </p>
        <WhiteHeading whiteHeadingText="Angebot" className="text-center" />
        <div className="flex flex-row flex-wrap gap-[17px] pt-[97.79px] pb-[77.23px]">
          {angebotCardList.map((obj, index) => (
            <div
              key={index}
              className="lg:w-[32.3%] md:w-[45%] sm:w-[49%] w-full"
            >
              <AngebotCardsList
                svg={obj.svg}
                title={obj.title}
                description={obj.description}
                cardBtn={obj.cardBtn}
                arrow={obj.arrow}
                bgCardSvg={index === 0 || index === 2 || index === 4}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Angebot;
