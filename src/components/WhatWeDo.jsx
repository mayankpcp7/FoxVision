import React from "react";
import Heading from "./common/Heading";
import whatWeDoImg from "../assets/images/webp/what-we-do/what-we-do.webp";
import {
  CommonLogo,
  CreativeDesignIcon,
  GraphicDesignIcon,
  VectoArrow,
  WhatWeDoLeftVector,
  WhatWeDoRightVector,
} from "./common/Icon";
import { SubHeading } from "./common/SubHeading";
import Button from "./common/Button";
import { Link } from "react-router-dom";
import watch from "../assets/images/webp/what-we-do/watch.webp";
import makethings from "../assets/images/webp/what-we-do/make-things-oks.webp";
import summeredition from "../assets/images/webp/what-we-do/summer-edition.webp";
import ultrahigh from "../assets/images/webp/what-we-do/ultra-high.webp";
import boodie from "../assets/images/webp/what-we-do/boodie.webp";
import unlockimg from "../assets/images/webp/what-we-do/unlock-your.webp";
import men from "../assets/images/webp/what-we-do/men.webp";
//
import joker from "../assets/images/webp/what-we-do/joker.webp";
import dog from "../assets/images/webp/what-we-do/dog.webp";
import cattes from "../assets/images/webp/what-we-do/cactes.webp";
import women from "../assets/images/webp/what-we-do/women.webp";
import fruit from "../assets/images/webp/what-we-do/fruit.webp";
import mobile from "../assets/images/webp/what-we-do/mobile.webp";
import menstar from "../assets/images/webp/what-we-do/menstar.webp";
const WhatWeDo = () => {
  return (
    <div className=" pt-[238px]">
      <div className="container max-w-[1164px] ">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3 relative ">
            <span className="absolute -top-[20%] max-lg:left-[5%] lg:top-[8%] lg:-right-[10%]  pointer-events-none">
              <VectoArrow />
            </span>
            <SubHeading
              className="max-lg:text-center"
              text="A RESULTS-DRIVEN AGENCY"
            />
            <Heading className="max-lg:text-center" heading="What we do" />
            <div className="max-w-[590px] lg:-translate-x-5 mt-5 md:mt-8 lg:mt-[49px] max-lg:mx-auto relative">
              <img
                className="w-full"
                width={590}
                height={390}
                src={whatWeDoImg}
                alt="what-we-do"
              />
              <div className="pointer-events-none absolute top-[24%] left-[4%] flex items-center z-[-1]">
                <span className="block w-[203px] h-[203px] opacity-20 blur-[100px] bg-darkpurple rounded-[203px]"></span>
                <span className="block w-[203px] h-[203px] opacity-20 blur-[100px] bg-sky rounded-[203px]"></span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 pt-10 lg:pt-16">
            <div className="md:max-w-[511px] max-lg:mx-auto lg:ms-auto">
              <span className="max-md:max-w-[50px] max-w-[70px] max-md:max-h-[55px] max-h-[85px] max-lg:mx-auto lg:ms-auto block ">
                <CommonLogo />
              </span>
              <p className="font-poppins font-normal text-base lg:text-xl text-darkblue leading-normal lg:!leading-lg opacity-70 max-lg:text-center mt-5">
                We define the intangible assets of your brand and subsequently
                increase{" "}
                <Link href="#" className="text-purple">
                  trust and loyalty to your brand.
                </Link>{" "}
                Uniqueness, value proposition, clearly understandable core
                messages and an innovative design result in a brand personality
                that will be. We then transfer this genetic code to the relevant
                target groups cross-media via relevant channels. And we will
                reposition you profitably
              </p>
              <Button
                className="mt-8 lg:mt-10 max-lg:mx-auto block"
                btnName="Contact"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-wrap -mx-3 pt-16 md:pt-28 lg:pt-40 xl:pt-[206px] flex-col-reverse items-center ">
          <div className="w-full lg:w-5/12 px-3 max-lg:pt-16">
            <div className="max-lg:max-w-[511px] max-lg:mx-auto">
              <div className="flex justify-center items-center max-md:w-[70px] max-md:h-[70px] w-[93px] h-[93px] bg-lightpurple rounded-lg shadow-creativeiconshadow max-lg:mx-auto">
                <CreativeDesignIcon />
              </div>
              <p className=" font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-darkblue leading-normal mt-6 sm:mt-8 md:mt-[39px] max-lg:text-center">
                UI/UX Creative Design
              </p>
              <p className=" font-poppins font-normal text-base md:text-lg lg:text-xl text-darkblue leading-normal lg:max-w-[386px] mt-2 max-lg:text-center">
                UI/UX creative design is the art of crafting digital experiences
                that seamlessly blend aesthetics with functionality. It's about
                understanding users' needs and behaviors and translating that
                knowledge into intuitive, visually appealing interfaces.{" "}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-7/12 px-3 relative">
            <span className="absolute -top-16 sm:top-5 right-0 md:right-[5%] lg:top-3 xl:top-[9%] lg:right-[-2%] xl:right-[-14%] z-[-1] pointer-events-none">
              <WhatWeDoRightVector />
            </span>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 md:gap-[22px] items-center max-w-[665px] mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={watch}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] relative">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] "
                  width={203}
                  height={219}
                  src={makethings}
                  alt="watch"
                />
                <img
                  className="max-[400px]:max-w-[70px] max-[500px]:max-w-[80px] max-[600px]:max-w-[110px] max-w-[123px] absolute -top-[29%] right-[7%]"
                  width={123}
                  height={123}
                  src={men}
                  alt="men"
                />
              </div>
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={summeredition}
                  alt="watch"
                />
              </div>
            </div>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 md:gap-[22px] items-center pt-4 sm:pt-[25px] max-w-[665px] mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={ultrahigh}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] translate-y-[35px] sm:translate-y-[43px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={boodie}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={unlockimg}
                  alt="watch"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 pt-16 md:pt-28 lg:pt-40 xl:pt-[202px]">
          {" "}
          <div className="w-full lg:w-7/12 px-3 relative">
            <span className="absolute -top-16 sm:top-5 left-0 md:left-[5%] lg:top-3 xl:top-[9%] lg:left-[-2%] xl:left-[-14%] z-[-1]">
              <WhatWeDoLeftVector />
            </span>
            <div className="flex justif-center max-[450px]:gap-2 gap-3 md:gap-[22px] items-center max-w-[665px] mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={219}
                  src={joker}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] relative translate-y-8">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] "
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
            <div className="flex justif-center max-[450px]:gap-2 gap-3 md:gap-[22px] items-center pt-4 sm:pt-[25px] max-w-[665px] mx-auto">
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={women}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px] translate-y-[30px] sm:translate-y-[35px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={fruit}
                  alt="watch"
                />
              </div>
              <div className="max-w-[203px]">
                <img
                  className="w-full border duration-300 border-transparent hover:border-purple rounded-[12.59px] shadow-whatwedo"
                  width={203}
                  height={151}
                  src={mobile}
                  alt="watch"
                />
              </div>
            </div>
          </div>{" "}
          <div className="w-full lg:w-5/12 px-3 pt-16">
            <div className="max-w-[420px] max-lg:mx-auto ms-auto">
              <div className="flex justify-center items-center max-md:w-[70px] max-md:h-[70px] w-[93px] h-[93px] bg-lightsky rounded-lg shadow-graphicdesign max-lg:mx-auto">
                <GraphicDesignIcon />
              </div>
              <p className=" font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-darkblue leading-normal mt-6 sm:mt-8 md:mt-[39px] max-lg:text-center">
                Visual Graphic Design
              </p>
              <p className=" font-poppins font-normal text-base md:text-lg lg:text-xl text-darkblue leading-normal  mt-2 max-lg:text-center">
                Visual graphic design is the art of using visual elements, such
                as images, typography, color, and layout, to convey a message,
                tell a story, or evoke emotions.
              </p>
            </div>
          </div>
        </div>
        <span className="block mt-[142px] mb-[30px]">
          <CommonLogo />
        </span>
      </div>
    </div>
  );
};

export default WhatWeDo;
