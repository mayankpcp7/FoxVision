import React, { useEffect, useState } from "react";
import { BackToTopIcon } from "./Icon";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
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
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bg-sky w-7 h-7 md:w-10 md:h-10 flex justify-center items-center rounded-full duration-300 z-[51] bottom-5 right-5 hover:bg-darkpurple"
        >
          <BackToTopIcon />
        </button>
      )}
    </>
  );
};

export default BackToTop;
