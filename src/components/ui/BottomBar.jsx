"use client";
import React, { useEffect, useState, useRef } from "react";

const BottomBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const scrollPercentage = Math.ceil(
      (scrollTop / (documentHeight - windowHeight)) * 100
    );
    document.documentElement.style.setProperty(
      "--scroll-percentage-pink",
      `${scrollPercentage * 0.75 + 25}%`
    );
    document.documentElement.style.setProperty(
      "--scroll-percentage-yellow",
      `${25 - scrollPercentage * 0.25}%`
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-[100] w-[100%] h-[8px] flex justify-between bg-[#00000042]">
      <div
        className={`scroll-horizontal-pink h-full bg-[#9B75FF] transition-all duration-200 ease-linear`}
      ></div>
      <div
        className={`scroll-horizontal-yellow h-full bg-[#02BAFE] transition-all duration-200 ease-linear`}
      ></div>
    </div>
  );
};

export default BottomBar;
