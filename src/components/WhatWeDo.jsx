import React from "react";
import whatWeDoImg from "../assets/images/webp/what-we-do/what-we-do.webp";
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
    <div className="pt-12 md:pt-16 lg:pt-20 xl:pt-[238px] overflow-x-clip">
      <div className="container max-w-[1164px] ">
        <WhatWeDoCommon
          classNameIcon="max-md:hidden -top-[20%] md:-top-[10%] max-lg:left-[5%] lg:top-[8%] lg:-right-[10%] "
          SubheadingText="A RESULTS-DRIVEN AGENCY"
          BlueHeadingText="What we do"
          src={whatWeDoImg}
          paragraphFirst="We define the intangible assets of your brand and subsequently
            increase"
          linkText=" trust and loyalty to your brand."
          paragraphSecond=" Uniqueness, value proposition, clearly understandable core messages
            and an innovative design result in a brand personality that will be.
            We then transfer this genetic code to the relevant target groups
            cross-media via relevant channels. And we will reposition you
            profitably"
        />
        <div className="flex lg:flex-row flex-wrap -mx-3 pt-28 lg:pt-32 xl:pt-[185px] flex-col-reverse items-center ">
          <div className="w-full lg:w-5/12 px-3 max-lg:pt-20">
            <div className="max-lg:max-w-[560px] max-lg:mx-auto">
              <div className="flex justify-center items-center max-lg:w-[70px] max-lg:h-[70px] w-[93px] h-[93px] bg-lightpurple rounded-lg shadow-creativeiconshadow max-lg:mx-auto">
                <CreativeDesignIcon />
              </div>
              <p className="font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-darkblue !leading-normal mt-6 sm:mt-8 md:mt-[39px] max-lg:text-center">
                UI/UX Creative Design
              </p>
              <p className="font-poppins font-normal text-base md:text-lg lg:text-xl text-darkblue !leading-normal opacity-70 lg:max-w-[386px] mt-2 max-lg:text-center">
                UI/UX creative design is the art of crafting digital experiences
                that seamlessly blend aesthetics with functionality. It's about
                understanding users' needs and behaviors and translating that
                knowledge into intuitive, visually appealing interfaces.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-7/12 px-3 relative">
            <span className="absolute max-[400px]:-top-[20%] -top-16 sm:top-5 right-0 md:top-[10%] md:right-[3%] lg:top-[10%] xl:top-[9%] lg:right-[-2%] xl:right-[-14%] z-[-1] pointer-events-none">
              <WhatWeDoRightVector />
            </span>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] max-lg:justify-center items-center max-md:max-w-[500px] lg:max-w-[665px] mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border object-cover duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={watch}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] relative">
                <img
                  className="w-full border object-cover duration-300 border-transparent hover:border-purple rounded-[12.59px] "
                  width={203}
                  height={219}
                  src={makethings}
                  alt="watch"
                />
                <img
                  className="max-[400px]:max-w-[70px] max-[500px]:max-w-[80px] max-[600px]:max-w-[110px] max-w-[123px] absolute -top-[29%] right-[7%] object-cover"
                  width={123}
                  height={123}
                  src={men}
                  alt="men"
                />
              </div>
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo object-cover"
                  width={203}
                  height={219}
                  src={summeredition}
                  alt="watch"
                />
              </div>
            </div>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] max-lg:justify-center items-center pt-4 lg:pt-[25px] max-md:max-w-[500px] lg:max-w-[665px] mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo object-cover"
                  width={203}
                  height={151}
                  src={ultrahigh}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] translate-y-[35px] sm:translate-y-[43px]">
                <img
                  className="w-full border duration-300 border-transparent object-cover hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={boodie}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent object-cover hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={unlockimg}
                  alt="watch"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 pt-16 md:pt-20 lg:pt-32 xl:pt-[242px]">
          {" "}
          <div className="w-full lg:w-7/12 px-3 relative">
            <span className="absolute max-[400px]:-top-[22%] -top-16 sm:top-5 left-0 md:left-[5%] lg:top-3 xl:top-0 lg:left-[-2%] xl:left-[-14%] z-[-1]">
              <WhatWeDoLeftVector />
            </span>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] items-center max-lg:max-w-[500px] lg:max-w-[665px] mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border object-cover duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={joker}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] relative translate-y-8">
                <img
                  className="w-full border object-cover duration-300 border-transparent hover:border-purple rounded-[12.59px] "
                  width={203}
                  height={219}
                  src={dog}
                  alt="watch"
                />
                <img
                  className="max-[400px]:max-w-[70px] max-[500px]:max-w-[80px] max-[600px]:max-w-[110px] max-w-[123px] absolute -top-[29%] translate-x-[18%] pointer-events-none"
                  width={123}
                  height={123}
                  src={menstar}
                  alt="men"
                />
              </div>
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={cattes}
                  alt="watch"
                />
              </div>
            </div>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 lg:gap-[22px] items-center pt-4 lg:pt-[25px] max-lg:max-w-[500px] lg:max-w-[665px] max-lg:mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border object-cover duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={women}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] translate-y-[30px] sm:translate-y-[35px]">
                <img
                  className="w-full border object-cover duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={fruit}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px]">
                <img
                  className="w-full border object-cover duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={mobile}
                  alt="watch"
                />
              </div>
            </div>
          </div>{" "}
          <div className="w-full lg:w-5/12 px-3 pt-16">
            <div className="max-lg:max-w-[560px] max-lg:mx-auto lg:max-w-[420px] ms-auto">
              <div className="flex justify-center items-center max-md:w-[70px] max-md:h-[70px] w-[93px] h-[93px] bg-lightsky rounded-lg shadow-graphicdesign max-lg:mx-auto">
                <GraphicDesignIcon />
              </div>
              <p className=" font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-darkblue !leading-normal mt-6 sm:mt-8 md:mt-[39px] max-lg:text-center">
                Visual Graphic Design
              </p>
              <p className=" font-poppins font-normal text-base md:text-lg lg:text-xl text-darkblue !leading-normal opacity-70 mt-2 max-lg:text-center">
                Visual graphic design is the art of using visual elements, such
                as images, typography, color, and layout, to convey a message,
                tell a story, or evoke emotions.
              </p>
            </div>
          </div>
        </div>
        <span className="block mt-12 sm:mt-16 lg:mt-20 xl:mt-[142px] mb-12 sm:mb-14 md:mb-20 lg:mb-[30px] max-lg:mx-auto max-lg:max-w-[50px]">
          <CommonLogo />
        </span>
      </div>
    </div>
  );
};

export default WhatWeDo;
