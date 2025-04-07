"use client";
import React, { useState, useEffect } from "react";

const TopScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        // Adjust the value (300) to your preference
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top-btn fixed bottom-5 right-1 z-50 border-none rounded-full  hidden md:flex justify-center items-center ${
        isVisible ? "visible" : "invisible"
      } bg-[#242424] text-white transition-all duration-300 ease-in-out p-3`}
    >
      <svg
        viewBox="0 0 745 421"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[18px] h-[18px] top-scroll-svg"
      >
        <path
          d="M349.666 10.4196L9.82639 367.092C4.15312 373.043 0.988281 380.949 0.988281 389.172C0.988281 397.394 4.15312 405.3 9.82639 411.252L10.2104 411.636C12.9607 414.531 16.2712 416.836 19.9405 418.411C23.6098 419.986 27.5612 420.799 31.5544 420.799C35.5475 420.799 39.499 419.986 43.1683 418.411C46.8376 416.836 50.1481 414.531 52.8984 411.636L372.898 75.7636L692.77 411.636C695.521 414.531 698.831 416.836 702.5 418.411C706.17 419.986 710.121 420.799 714.114 420.799C718.108 420.799 722.059 419.986 725.728 418.411C729.398 416.836 732.708 414.531 735.458 411.636L735.842 411.252C741.516 405.3 744.681 397.394 744.681 389.172C744.681 380.949 741.516 373.043 735.842 367.092L396.002 10.4196C393.014 7.2828 389.419 4.78557 385.437 3.07928C381.454 1.373 377.167 0.493164 372.834 0.493164C368.502 0.493164 364.214 1.373 360.232 3.07928C356.249 4.78557 352.655 7.2828 349.666 10.4196Z"
          fill="white"
          stroke="white"
          strokeWidth={"20"}
        />
      </svg>
    </button>
  );
};

export default TopScroll;
