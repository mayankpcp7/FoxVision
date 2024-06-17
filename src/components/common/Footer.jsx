import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import footerlogo from "../../assets/images/common/footer-logo.svg";
import { Facebook, Insta } from "./Icon";
const Footer = () => {
  return (
    <>
      <footer className=" bg-footer pt-28 sm:pt-40 sm xl:pt-[224px] relative">
        <div className="flex justify-center flex-col absolute top-[-36%] start-[50%] translate-x-[-50%] w-full max-w-[1140px] bg-sky rounded-[10px] items-center mx-auto py-9">
          <p className="text-white font-montserrat font-semibold text-4xxl leading-md text-center md:max-w-[713px]">
            Möchten Sie ein Projekt starten? Wir freuen uns.
          </p>
          <Link to="/contact">
            <Button className="border-2 mt-7 border-white" btnName="Kontakt" />
          </Link>
        </div>
        <div className="max-w-[1164px] px-3 mx-auto">
          <div className="flex flex-row gap-10 md:gap-0 justify-center md:justify-between flex-wrap -mx-3 max-w-[1140px]">
            <div className="w-full flex flex-col items-center md:items-start md:w-5/12 px-3">
              <img className="max-w-[252px]" src={footerlogo} alt="logo" />
              <p className="max-w-[433px] md:max-w-[311px] md:text-start text-center pt-4 text-white opacity-70">
                Libero morbi pharetra sollicitudin enim praesent nulla velit
                sitonec leodui.
              </p>
              <div className="flex mt-7 gap-4">
                <Link to="https://www.facebook.com/">
                  <Facebook />
                </Link>
                <Link to="https://www.instagram.com/">
                  <Insta />
                </Link>
              </div>
            </div>
            <div className="flex justify-between lg:justify-start w-full sm:w-10/12 md:w-7/12 lg:w-6/12">
              <div className="w-4/12 md:w-3/12 px-3">
                <p className="text-white font-poppins font-semibold text-base md:text-start text-center leading-md pb-[14px]">
                  Home
                </p>
                <ul className="flex flex-col">
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/about"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/offer"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Offer
                    </Link>
                  </li>
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/contact"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-4/12 md:w-5/12 lg:w-7/12 px-3">
                <p className="text-white font-poppins font-semibold text-base md:text-start text-center leading-md pb-[14px]">
                  Agency
                </p>
                <ul className="flex flex-col">
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/about"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Fox Vision GmbH
                    </Link>
                  </li>
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/offer"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white max-w-[201px] font-normal opacity-70"
                    >
                      Badstrasse 50 <br />  CH-5200 Brugg
                    </Link>
                  </li>
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/contact"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      +41 79 725 61 00
                    </Link>
                  </li>
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/contact"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      info@foxvision.ch
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-4/12 md:w-2/12 px-3">
                <p className="text-white font-poppins font-semibold text-base md:text-start text-center leading-md pb-[14px]">
                  Home
                </p>
                <ul className="flex flex-col">
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/about"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/offer"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Offer
                    </Link>
                  </li>
                  <li className="pb-3 md:text-start text-center">
                    <Link
                      to="/contact"
                      className="leading-md pb-3 md:text-start sm:text-base text-sm text-center font-poppins text-white font-normal opacity-70"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
