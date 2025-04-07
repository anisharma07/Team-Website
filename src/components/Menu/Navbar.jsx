"use client";
import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

const Navbar = ({ handleIsOpen }) => {
  const { y } = useWindowScroll();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const currentScrollTop = y;
    if (currentScrollTop < lastScrollTop) {
      setShowHeader(true);
    } else if (currentScrollTop > lastScrollTop) {
      setShowHeader(false);
    }
    setLastScrollTop(currentScrollTop);
  }, [y, lastScrollTop]);

  return (
    <div>
      <nav
        className="fixed top-0 left-0 z-[10] w-[100%] h-[80px] ssm:h-[70px] flex justify-between items-center "
        style={{
          top: showHeader ? "0" : "-200px",
          transition: "top 0.5s",
        }}
      >
        <a href="/">
          <img
            src="../../assets/icons/exeClear.png"
            alt="exe"
            className="h-[60px] ssm:h-[50px] absolute z-[102] top-2 left-4 xxs:h-[30px] hover:scale:110"
          />
        </a>
        <button
          onClick={handleIsOpen}
          className="font-spaceMono font-[500] block absolute z-[102] top-5 right-5 py-1 px-3 hover:bg-purpleSecondary hover:text-black text-[18px] ssm:text-[15px] xxs:text-[13px] text-purpleSecondary border-[1px] border-purpleSecondary rounded-[5px] transition-all duration-200 ease-linear"
        >
          MENU
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
