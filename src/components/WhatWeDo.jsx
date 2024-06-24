import React from "react";
import dashboardmg from "../assets/images/webp/what-we-do/dashboard.webp";
import {
  CommonLogo,
  CreativeDesignIcon,
  GraphicDesignIcon,
  WhatWeDoLeftVector,
  WhatWeDoRightVector,
} from "./common/Icon";
import watch from "../assets/images/webp/what-we-do/watch.webp";
import makethings from "../assets/images/webp/what-we-do/make-things-oks.webp";
import summeredition from "../assets/images/webp/what-we-do/summer-edition.webp";
import ultrahigh from "../assets/images/webp/what-we-do/ultra-high.webp";
import boodie from "../assets/images/webp/what-we-do/boodie.webp";
import unlockimg from "../assets/images/webp/what-we-do/unlock-your.webp";
import men from "../assets/images/webp/what-we-do/men.webp";
import joker from "../assets/images/webp/what-we-do/joker.webp";
import dog from "../assets/images/webp/what-we-do/dog.webp";
import cattes from "../assets/images/webp/what-we-do/cactes.webp";
import women from "../assets/images/webp/what-we-do/women.webp";
import fruit from "../assets/images/webp/what-we-do/fruit.webp";
import mobile from "../assets/images/webp/what-we-do/mobile.webp";
import menstar from "../assets/images/webp/what-we-do/menstar.webp";
import { WhatWeDoCommon } from "./common/WhatWeDoCommon";
const WhatWeDo = () => {
  return (
    <div className="pt-12 md:pt-16 lg:pt-20 xl:pt-[238px] pb-12 sm:pb-14 md:pb-20 lg:pb-[30px] overflow-x-clip">
      <div className="container max-w-[1164px] px-5 md:px-4 xl:px-3">
        <WhatWeDoCommon
          classNameIcon="max-md:hidden -top-[20%] md:-top-[10%] max-lg:left-[5%] lg:top-[8%] lg:-right-[10%]"
          SubheadingText="A RESULTS-DRIVEN AGENCY"
          BlueHeadingText="What we do"
          src={dashboardmg}
          paragraphFirst="We define the intangible assets of your brand and subsequently
            increase"
          linkText=" trust and loyalty to your brand."
          paragraphSecond=" Uniqueness, value proposition, clearly understandable core messages
            and an innovative design result in a brand personality that will be.
            We then transfer this genetic code to the relevant target groups
            cross-media via relevant channels. And we will reposition you
            profitably"
        />
        <div className="flex lg:flex-row flex-wrap -mx-3 pt-32 lg:pt-32 xl:pt-[185px] flex-col-reverse items-center">
          <div className="w-full lg:w-5/12 px-3 max-sm:pt-[70px] max-lg:pt-20">
            <div className="max-lg:max-w-[560px] max-lg:mx-auto">
              <div
                className="flex justify-center items-center max-lg:w-[60px] max-lg:h-[60px] w-[93px] h-[93px] bg-lightpurple rounded-lg shadow-creativeiconshadow max-lg:mx-auto"
                data-aos="zoom-in"
              >
                <CreativeDesignIcon />
              </div>
              <p
                className="font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-darkblue !leading-normal mt-6 sm:mt-8 md:mt-[39px] max-lg:text-center"
                data-aos="zoom-in"
              >
                UI/UX Creative Design
              </p>
              <div data-aos="zoom-in">
                <p className="font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl text-darkblue !leading-normal opacity-70 lg:max-w-[386px] mt-2 max-lg:text-center">
                  UI/UX creative design is the art of crafting digital
                  experiences that seamlessly blend aesthetics with
                  functionality. It's about understanding users' needs and
                  behaviors and translating that knowledge into intuitive,
                  visually appealing interfaces.
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full lg:w-7/12 px-3 relative"
            data-aos="zoom-in-left"
          >
            <span className="absolute max-[400px]:-top-[20%] -top-16 sm:top-5 right-0 md:top-[10%] md:right-[3%] lg:top-[10%] xl:top-[9%] lg:right-[-2%] xl:right-[-14%] z-[-1] pointer-events-none">
              <WhatWeDoRightVector />
            </span>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] max-lg:justify-center items-center max-md:max-w-[500px] lg:max-w-[665px] mx-auto">
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple  rounded-[12.59px]">
                <img
                  className="w-full max-h-[219px] object-cover rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={watch}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] relative border duration-500 transition-all ease-linear border-transparent hover:border-purple  rounded-[12.59px]">
                <img
                  className="w-full max-h-[219px] object-cover rounded-[12.59px]"
                  width={203}
                  height={219}
                  src={makethings}
                  alt="watch"
                />
                <img
                  className="max-h-[123px] max-[400px]:max-w-[70px] max-[500px]:max-w-[80px] max-[600px]:max-w-[110px] max-w-[123px] absolute -top-[29%] right-[7%] object-cover pointer-events-none"
                  width={123}
                  height={123}
                  src={men}
                  alt="men"
                />
              </div>
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple  rounded-[12.59px]">
                <img
                  className="w-full max-h-[219px] rounded-[12.59px] shadow-whatwedo object-cover"
                  width={203}
                  height={219}
                  src={summeredition}
                  alt="watch"
                />
              </div>
            </div>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] max-lg:justify-center items-center pt-4 lg:pt-[25px] max-md:max-w-[500px] lg:max-w-[665px] mx-auto">
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple  rounded-[12.59px]">
                <img
                  className="w-full max-h-[151px] rounded-[12.59px] shadow-whatwedo object-cover"
                  width={203}
                  height={151}
                  src={ultrahigh}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] translate-y-[25px] lg:translate-y-[43px] border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[151px] object-cover rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={boodie}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[151px] object-cover rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={unlockimg}
                  alt="watch"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 pt-20 md:pt-28 lg:pt-32 xl:pt-[242px] items-center">
          <div
            className="w-full lg:w-7/12 px-3 relative"
            data-aos="zoom-in-right"
          >
            <span className="absolute max-[400px]:-top-[22%] -top-16 sm:top-5 left-0 md:top-[7%] md:left-[2%] lg:top-[6%] xl:top-0 lg:left-[-2%] xl:left-[-14%] z-[-1]">
              <WhatWeDoLeftVector />
            </span>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] items-center max-lg:justify-center max-md:max-w-[500px] lg:max-w-[665px] mx-auto">
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[219px] object-cover rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={joker}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] relative translate-y-8 border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[219px] object-cover rounded-[12.59px]"
                  width={203}
                  height={219}
                  src={dog}
                  alt="watch"
                />
                <img
                  className="max-h-[123px] max-[400px]:max-w-[70px] max-[500px]:max-w-[80px] max-[600px]:max-w-[110px] max-w-[123px] absolute -top-[29%] translate-x-[18%] pointer-events-none"
                  width={123}
                  height={123}
                  src={menstar}
                  alt="men"
                />
              </div>
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[219px] rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={cattes}
                  alt="watch"
                />
              </div>
            </div>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] items-center max-lg:justify-center pt-4 lg:pt-[25px] max-md:max-w-[500px] lg:max-w-[665px] max-lg:mx-auto">
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[151px] object-cover rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={women}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] translate-y-[30px] sm:translate-y-[35px] border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[151px] object-cover rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={fruit}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] border duration-500 transition-all ease-linear border-transparent hover:border-purple rounded-[12.59px]">
                <img
                  className="w-full max-h-[151px] object-cover rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={mobile}
                  alt="watch"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-3 pt-20 lg:pt-0">
            <div className="max-lg:max-w-[560px] max-lg:mx-auto lg:max-w-[420px] ms-auto">
              <div
                className="flex justify-center items-center max-md:w-[70px] max-md:h-[70px] w-[93px] h-[93px] bg-lightsky rounded-lg shadow-graphicdesign max-lg:mx-auto"
                data-aos="zoom-in-up"
              >
                <GraphicDesignIcon />
              </div>
              <p
                className="font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-darkblue !leading-normal mt-6 sm:mt-8 md:mt-[39px] max-lg:text-center"
                data-aos="zoom-in-up"
              >
                Visual Graphic Design
              </p>
              <div data-aos="zoom-in-up">
                <p className="font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl text-darkblue !leading-normal opacity-70 mt-2 max-lg:text-center">
                  Visual graphic design is the art of using visual elements,
                  such as images, typography, color, and layout, to convey a
                  message, tell a story, or evoke emotions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <span
          className="block mt-6 sm:mt-12 lg:mt-28 xl:mt-[142px] max-lg:mx-auto max-lg:max-w-[50px]"
          data-aos="zoom-out-up"
        >
          <CommonLogo />
        </span>
      </div>
    </div>
  );
};

export default WhatWeDo;
