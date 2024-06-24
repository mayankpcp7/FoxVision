import React, { useEffect, useState } from "react";
import { BackToTopIcon } from "./Icon";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <div
        className={`fixed z-50 max-[450px]:bottom-12 bottom-5 right-5 2xl:right-[calc((100vw-1700px)/2)] transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-0 translate-y-[40px]"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center transition-all duration-300 rounded-[40px] w-7 h-7 sm:w-10 sm:h-10 bg-sky hover:bg-darkpurple border border-white"
        >
          <BackToTopIcon />
        </button>
      </div>
    </>
  );
};

export default BackToTop;
