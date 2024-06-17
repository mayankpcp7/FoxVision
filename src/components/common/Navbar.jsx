import React, { useState, useEffect } from "react";
import logo from "../../assets/images/common/nav-logo.svg";
import { Link } from "react-router-dom";
import { CallIcon, MailIcon } from "./Icon";
import Button from "./Button";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  function showNav() {
    setNavBar(!navBar);
  }

  useEffect(() => {
    if (navBar) {
      document.body.classList.add("max-xlg:overflow-hidden");
    } else {
      document.body.classList.remove("max-xlg:overflow-hidden");
    }
  }, [navBar]);

    return (
      <div className="px-3">
        <nav className="max-w-[1240px]  mx-auto rounded-[150px] py-4 xlg:py-[11px] flex justify-between px-8 lg:px-12 shadow-navshadow bg-white">
          <Link className="items-center flex" to="">
            <img
              className="max-w-[150px] xs:max-w-[170px] md:max-w-[190px] relative z-50 lg:max-w-[207px]"
              src={logo}
              alt="navlogo"
            />
          </Link>
          <div className="flex">
            <ul
              className={`flex items-center  gap-10 z-10 relative  sm:gap-6 duration-300 max-xlg:fixed max-xlg:w-full max-xlg:!min-h-screen max-xlg:justify-center  max-xlg:flex-col max-xlg:top-0 max-xlg:left-[-105%] max-xlg:p-[30px] max-xlg:!bg-white ${
                navBar && "!left-0"
              }`}
            >
              <li className="duration-300 transition-all">
                <Link
                  to="/"
                  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-md before:duration-300 before:w-0 text-xl sm:text-md lg:text-base text-darkblue"
                >
                  Home
                </Link>
              </li>
              <li className="duration-300 transition-all">
                <Link
                  to="/about"
                  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-md before:duration-300 before:w-0 text-xl sm:text-md lg:text-base text-darkblue"
                >
                  Über uns
                </Link>
              </li>
              <li className="duration-300 transition-all">
                <Link
                  to="/offer"
                  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-md before:duration-300 before:w-0 text-xl sm:text-md lg:text-base text-darkblue"
                >
                  Angebot
                </Link>
              </li>
              <li className="duration-300 transition-all">
                <Link
                  to="/portfolio"
                  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-md before:duration-300 before:w-0 text-xl sm:text-md lg:text-base text-darkblue"
                >
                  Portfolio
                </Link>
              </li>
              <div className="xlg:hidden items-center flex flex-col gap-10 sm:gap-6">
                <div className="flex items-center gap-4">
                  <a href="tel:+1234567890">
                    <CallIcon />
                  </a>
                  <a href="mailto:example@example.com">
                    <MailIcon />
                  </a>
                </div>
                <Link to="/contact">
                  <Button btnName="Kontakt" />
                </Link>
              </div>
            </ul>
          </div>
          <div className="hidden items-center xlg:flex gap-4">
            <a href="tel:+1234567890">
              <CallIcon />
            </a>
            <a href="mailto:example@example.com">
              <MailIcon />
            </a>
            <Link to="/contact">
              <Button btnName="Kontakt" />
            </Link>
          </div>

          <button onClick={showNav} className="xlg:hidden relative z-50">
            {navBar ? (
              <div className="flex xlg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer">
                <span className="bg-black min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[15px]"></span>
                <span className="bg-black min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[11px]"></span>
              </div>
            ) : (
              <div className="flex xlg:hidden flex-col z-50 justify-between my-1 w-[21px] h-[15px] cursor-pointer relative">
                <span className="bg-black rounded-md w-1/2 h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
                <span className="bg-black rounded-md w-full h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
                <span className="bg-black rounded-md w-1/2 h-[3px] ms-auto relative z-50 transition-all ease-linear duration-300"></span>
              </div>
            )}
          </button>
        </nav>
      </div>
    );
};

export default Navbar;
