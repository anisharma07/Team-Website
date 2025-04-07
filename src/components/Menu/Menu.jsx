"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Menubtn from "./UiComponents/Menubtn";
import StudyMat from "./StudyComponents/StudyMat";
import Faqs from "./UiComponents/Faqs";
import { motion } from "framer-motion";
import Image from "next/image";
import "./style.css";
import {
  About,
  Contact,
  Events,
  Home,
  Projects,
  Team,
  Workshops,
  Study,
} from "./menu-svg-icons";

const Menu = ({ closeMenuModal, isFaqOpen, setIsFaqOpen }) => {
  const heroRef = useRef();
  const hero2Ref = useRef();

  useEffect(() => {
    heroRef.current.style.setProperty("--x", `100px`);
    hero2Ref.current.style.setProperty("--x", `100px`);
    heroRef.current.style.setProperty("--y", `100px`);
    hero2Ref.current.style.setProperty("--y", `100px`);
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      if (!hero2Ref.current) return;
      const rect = hero2Ref.current.getBoundingClientRect();
      const { clientX, clientY } = ev;
      console.log(clientX, clientY);
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      hero2Ref.current.style.setProperty("--x", `${clientX - rect.left}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
      hero2Ref.current.style.setProperty("--y", `${clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const [isStudyOpen, setIsStudyOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const openStudyModal = () => {
    setIsFaqOpen(false);
    setIsStudyOpen(true);
  };
  const openFaqModal = () => {
    setIsStudyOpen(false);
    setIsFaqOpen(true);
  };
  const backToNormal = () => {
    setIsFaqOpen(false);
    setIsStudyOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className={`fixed flex justify-center items-center ${
        isMobile ? "menu_gradient-right" : "menu_gradient"
      } top-0 left-0 z-[10000] text-white h-[100dvh] w-[100%] bg-[#000000d5]`}
      ref={heroRef}
      initial={{
        opacity: 0,
        y: `${isMobile ? "0vh" : "-100vh"}`,
        x: `${isMobile ? "100vw" : "0vw"}`,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      exit={{
        opacity: 0,
        y: `${isMobile ? "0vh" : "-100vh"}`,
        x: `${isMobile ? "100vw" : "0vw"}`,
        transition: { duration: 0.5 },
      }}
    >
      <div
        className="absolute w-full h-full cursor-pointer z-[100000]"
        onClick={closeMenuModal}
      ></div>

      <div
        className="absolute z-[1000000] menu_gradient max-w-[1100px] max-h-[700px] w-[90%] h-[90%] rounded-[25px] flex items-center justify-center ssm:border-none ssm:w-[100%] ssm:h-[100%] ssm:rounded-[0px] ssm:max-h-[100%] bg-[#00000080]"
        ref={hero2Ref}
      >
        {/* common component  */}
        {!isStudyOpen && !(isFaqOpen && isMobile) && (
          <div
            onClick={openStudyModal}
            className={`cursor-pointer absolute bottom-4 left-6  z-[10000000] text-[35px]`}
          >
            📑
          </div>
        )}
        <div
          className="cursor-pointer absolute top-4 right-6  z-[10000000]"
          onClick={closeMenuModal}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full hover:bg-[#240c2986] ssm:hover:bg-[#a683ffaa] transition-all duration-300 hover:scale-110 hover:rotate-180 p-2"
          >
            <path
              d="M35.1562 12.7872L32.2128 9.84375L22.5 19.5565L12.7872 9.84375L9.84375 12.7872L19.5565 22.5L9.84375 32.2128L12.7872 35.1562L22.5 25.4435L32.2128 35.1562L35.1562 32.2128L25.4435 22.5L35.1562 12.7872Z"
              fill="white"
            />
          </svg>
        </div>
        {isMobile && !isFaqOpen && !isStudyOpen && (
          <a
            href="/"
            className="exe cursor-pointer absolute top-4 left-6  z-[10000000] hover:scale-110 transition-all duration-300 ease-in-out"
            onClick={closeMenuModal}
          >
            <Image
              src="/assets/icons/exeClear.png"
              alt="exe"
              width={50}
              height={50}
            />
          </a>
        )}
        {((!isMobile && isStudyOpen) || (isMobile && !isFaqOpen)) && (
          <div
            className="cursor-pointer absolute bottom-4 right-6 w-[40px] hover:opacity-80 z-[10000000]"
            onClick={openFaqModal}
          >
            <img src="../assets/icons/QnA.png" alt="qna" className="w-[40px]" />
          </div>
        )}

        {/* back to menu  */}
        {isMobile && (isStudyOpen || isFaqOpen) && (
          <div
            className="cursor-pointer absolute top-4 left-6 w-[50px] hover:opacity-80 z-[10000000]"
            onClick={backToNormal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 30 30"
              fill="rgba(255, 255, 255, 1)"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>
        )}

        {/* based on devices  */}
        {((isMobile && !isStudyOpen && !isFaqOpen) || !isMobile) && (
          <div className="transparent-buttons flex flex-col pl-16 pr-16">
            <Menubtn
              btn_title="Home"
              BtnImage={Home}
              btn_delay="0.1"
              btn_href="/"
              clickCallbackFunction={closeMenuModal}
            />
            <Menubtn
              btn_title="About"
              BtnImage={About}
              btn_delay="0.2"
              btn_href="/about"
              clickCallbackFunction={closeMenuModal}
            />
            <Menubtn
              btn_title="Projects"
              BtnImage={Projects}
              btn_delay="0.3"
              btn_href="/projects/ai-ml"
              clickCallbackFunction={closeMenuModal}
            />
            <Menubtn
              btn_title="Events"
              BtnImage={Events}
              btn_delay="0.4"
              btn_href="/our-work/events"
              clickCallbackFunction={closeMenuModal}
            />

            <Menubtn
              btn_title="Workshops"
              BtnImage={Workshops}
              btn_delay="0.5"
              btn_href="/our-work/workshops"
              clickCallbackFunction={closeMenuModal}
            />
            <Menubtn
              btn_title="Our Team"
              BtnImage={Team}
              btn_delay="0.6"
              btn_href="/our-team"
              clickCallbackFunction={closeMenuModal}
            />
            <Menubtn
              btn_title="Contact Us"
              BtnImage={Contact}
              btn_delay="0.7"
              btn_href="/#contact"
              clickCallbackFunction={closeMenuModal}
            />
          </div>
        )}
        {(!isMobile || isFaqOpen || isStudyOpen) && (
          <div className="flex h-full w-full border-l-2 border-[#ffffff20] ssm:border-none">
            {!isStudyOpen && <Faqs />}
            {isStudyOpen && <StudyMat />}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;
