import React from "react";
import { WhiteHeading } from "./common/Heading";
import { angebotCardList } from "./common/Helper";
import AngebotCardsList from "./AngebotCardsList";
import { WhiteLogo } from "./common/Icon";

const Angebot = () => {
  return (
    <div className="bg-darkpurple xl:pt-[122.94px] xl:pb-[248.65px] md:py-[90px] sm:py-[65px] pt-12 pb-36">
      <div className="container xl:max-w-[1164px] px-3">
        <p className="uppercase text-white text-center font-poppins font-bold sm:text-xl text-sm leading-normal mb-[13.27px]">
          A RESULTS-DRIVEN AGENCY
        </p>
        <WhiteHeading whiteHeadingText="Angebot" className="text-center" />
        <div className="flex flex-row flex-wrap justify-center xl:gap-[17px] lg:gap-[15px] md:gap-5 sm:gap-3 gap-4 lg:pt-[97.79px] lg:pb-[77.23px] md:py-[60px] sm:py-12 py-9">
          {angebotCardList.map((obj, index) => (
            <div
              key={index}
              className="lg:w-[32.3%] md:w-[45%] sm:w-[49%] w-full"
            >
              <AngebotCardsList
                className={`${
                  index === 0
                    ? "sm:pb-[59.24px]"
                    : index === 1
                    ? "sm:pb-[59.24px]"
                    : index === 2
                    ? "sm:pb-[59.24px]"
                    : ""
                }`}
                svg={obj.svg}
                title={obj.title}
                description={obj.description}
                cardBtn={obj.cardBtn}
                arrow={obj.arrow}
                bgCardSvg={index === 0 || index === 2 || index === 4}
                cardLink={index === 3 || index === 4 || index === 5}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <WhiteLogo className="lg:w-[141px] cursor-pointer lg:h-[132px] sm:w-[121px] sm:h-[101px] h-[81px] w-[101px]" />
        </div>
      </div>
    </div>
  );
};

export default Angebot;
