import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { Facebook, Insta } from "./Icon";
import footerlogo from "../../assets/images/common/footer-logo.svg";
import rightvector from "../../assets/images/webp/footer/right-vector.webp";
import leftvector from "../../assets/images/webp/footer/left-vector.webp";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      <footer
        className={`pt-28 sm:pt-40 xl:pt-[224px] relative ${
          isContactPage ? "!pt-20" : ""
        }`}
      >
        <img
          className="absolute -z-0 bottom-0 pointer-events-none end-0"
          src={rightvector}
          alt="vector"
        />
        <img
          className="absolute -z-0 pointer-events-none top-0 start-0"
          src={leftvector}
          alt="vector"
        />
        {!isContactPage && (
          <div className="flex justify-center flex-col explore_card absolute top-[-21%] md:top-[-40%] xl:top-[-32%] left-1/2 transform -translate-x-1/2 w-full max-w-[1140px] bg-sky rounded-[10px] items-center mx-auto py-9">
            <p
              className="text-white font-montserrat font-semibold text-xl max-w-[300px] xs:max-w-[450px] sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xxl !leading-md text-center md:max-w-[713px]"
              data-aos="zoom-out-up"
            >
              Möchten Sie ein Projekt starten? Wir freuen uns.
            </p>
            <Link to="/contact" data-aos="zoom-out-up">
              <Button
                className="border-2 sm:mt-7 mt-5 border-white"
                btnName="Kontakt"
              />
            </Link>
          </div>
        )}
        <div className="max-w-[1164px] px-3 mx-auto">
          <div className="flex gap-10 md:gap-0 justify-center md:justify-between flex-wrap -mx-3 max-w-[1140px]">
            <div className="w-full md:w-5/12 px-3 flex flex-col items-center md:items-start">
              <Link to="/">
                <img
                  className="max-w-[160px] xs:max-w-[180px] md:max-w-[200px] relative z-50 lg:max-w-[252px]"
                  src={footerlogo}
                  alt="logo"
                />
              </Link>
              <p className="max-w-[433px] md:max-w-[311px] text-center md:text-left pt-2 md:pt-4 text-white opacity-70">
                Libero morbi pharetra sollicitudin enim praesent nulla velit
                sitonec leodui.
              </p>
              <div className="flex mt-7 gap-4">
                <Link
                  className="duration-300 hover:scale-125"
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </Link>
                <Link
                  className="duration-300 hover:scale-125"
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Insta />
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-10/12 md:w-7/12 lg:w-6/12 flex flex-row flex-wrap md:flex-nowrap lg:justify-start">
              <div className="w-6/12 sm:w-4/12 md:w-3/12 px-3">
                <p className="text-white font-poppins font-semibold text-base md:text-left text-center leading-md pb-[14px]">
                  Home
                </p>
                <ul className="flex flex-col">
                  <li className="pb-3 md:text-left text-center">
                    <Link
                      to="/about"
                      className="leading-md pb-2 xs:pb-3 hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="pb-3 md:text-left text-center">
                    <Link
                      to="/offer"
                      className="leading-md pb-2 xs:pb-3 hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Offer
                    </Link>
                  </li>
                  <li className="md:text-left text-center">
                    <Link
                      to="/contact"
                      className="leading-md hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-6/12 sm:w-4/12 md:w-5/12 xl:w-7/12 px-3">
                <p className="text-white font-poppins font-semibold text-base md:text-left text-center leading-md pb-[14px]">
                  Agency
                </p>
                <ul className="flex flex-col">
                  <li className="pb-3 md:text-left text-center">
                    <Link
                      to="/about"
                      className="leading-md pb-2 xs:pb-3 hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Fox Vision GmbH
                    </Link>
                  </li>
                  <li className="pb-3 md:text-left text-center">
                    <Link
                      to="/offer"
                      className="leading-md pb-2 xs:pb-3 hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white max-w-[201px] font-normal opacity-70"
                    >
                      Badstrasse 50 <br /> CH-5200 Brugg
                    </Link>
                  </li>
                  <li className="pb-3 md:text-left text-center">
                    <Link
                      to="/contact"
                      className="leading-md pb-2 xs:pb-3 hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      +41 79 725 61 00
                    </Link>
                  </li>
                  <li className="md:text-left text-center">
                    <Link
                      to="/contact"
                      className="leading-md md:text-left sm:text-base text-sm text-center hover:opacity-100 duration-300 font-poppins text-white font-normal opacity-70"
                    >
                      info@foxvision.ch
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-6/12 sm:w-4/12 md:w-3/12 px-3">
                <p className="text-white font-poppins font-semibold text-base md:text-left text-center leading-md pb-[14px]">
                  Legal
                </p>
                <ul className="flex flex-col">
                  <li className="pb-3 md:text-left text-center">
                    <Link
                      to="/about"
                      className="leading-md pb-2 xs:pb-3 hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Imprint
                    </Link>
                  </li>
                  <li className="pb-3 md:text-left text-center">
                    <Link
                      to="/offer"
                      className="leading-md pb-2 xs:pb-3 whitespace-nowrap hover:opacity-100 duration-300 md:text-left sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Data protection
                    </Link>
                  </li>
                  <li className="md:text-left text-center">
                    <Link
                      to="/contact"
                      className="leading-md md:text-left hover:opacity-100 duration-300 sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Copyright
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="font-poppins font-normal text-white opacity-70 text-center pb-2 xs:pb-3 pt-12 md:pt-24 mt-4 text-sm">
        Copyright©2024 Fox Vision GmbH. All right reserved.
      </p>
    </>
  );
};

export default Footer;
