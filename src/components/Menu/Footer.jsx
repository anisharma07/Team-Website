"use client";
import React from "react";
import FooterLinks from "./UiComponents/FooterLinks";
import "./style.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";
import FooterQueries from "./UiComponents/FooterQueries";
import SocialIcons from "./UiComponents/SocialIcons";
const Footer = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(true);
    document.body.classList.add("hide-scrollbar");
  };
  const handleOpenFaqs = () => {
    setIsFaqOpen(true);
    handleIsOpen();
  };
  const closeMenuModal = () => {
    setIsFaqOpen(false);
    setIsOpen(false);
    document.body.classList.remove("hide-scrollbar");
  };
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <Menu
            closeMenuModal={closeMenuModal}
            isFaqOpen={isFaqOpen}
            setIsFaqOpen={setIsFaqOpen}
          />
        )}
      </AnimatePresence>

      <Navbar handleIsOpen={handleIsOpen} />
      <footer className="relative h-[295px] ssm:h-[550px] w-full">
        <div
          id="footer-block"
          className=" absolute top-0 left-0 border-t-[1px] border-[#ffffff2a] w-full h-[295px] ssm:h-[550px] pt-[15px]"
        >
          <div className="relative flex justify-between items-center w-[90%]  h-[220px] border-b-[1px] border-[#ffffffad] m-auto ssm:flex-col ssm:h-[460px] text-[#ffffff]">
            {/* copyright  */}
            <div className="absolute bottom-[-33px] left-0 right-0 text-center">
              <p className=" text-[15px] font-poppins font-[300]">
                {" "}
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-purpleSecondary">team.exe</span>
                <span className="ssm:hidden">. All rights reserved</span>{" "}
              </p>
            </div>
            {/* //let's connect  */}
            <div className="flex flex-col items-start justify-between font-aldrich mr-14 md:mr-6 ssm:border-b-2 ssm:w-full ssm:items-center ssm:py-4 ssm:mr-0">
              <img
                src="../../assets/icons/exeClear.png"
                alt="exe"
                className="w-[70px] mb-3 md:w-[60px] md:mb-2 ssm:mb-5"
              />
              <h1 className="mb-3 text-[24px] 	md:text-[21px] ssm:hidden">
                {" "}
                <span className="text-purpleSecondary">CONNECT</span> WITH US{" "}
              </h1>
              <SocialIcons />
            </div>

            {/* important links */}
            <FooterLinks openFaqs={handleOpenFaqs} />

            {/* queries and feedback */}
            <FooterQueries />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
