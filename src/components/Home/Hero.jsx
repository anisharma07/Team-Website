"use client";
import React, { useState } from "react";
import TeamExe from "./svgs/TeamExe";
import TeamExeMob from "./svgs/TeamExeMob";
// import Aurora from "../ui/Aurora";
import blob1 from "../../../public/assets/blob/blob1.png";
import blob2 from "../../../public/assets/blob/blob2.png";
import blob3 from "../../../public/assets/blob/blob3.png";
import blob4 from "../../../public/assets/blob/blob4.png";

import { Email, Github, LinkedIn, Twitter, Insta } from "./svgs";

const Hero = ({ isMobile }) => {
  return (
    <>
      <meta
        name="description"
        content="TeamExe - A collaborative team from NITH"
      />
      <meta
        name="keywords"
        content="TeamExe, NITH, Collaboration, Team, Programming"
      />
      {/* {blobs} */}

      <img
        src={blob1.src}
        alt="blob1"
        className="blob1 animate-float-rev absolute z-[-1] w-[250px] sm:w-[150px]  top-[58vh] left-0"
      />
      <img
        src={blob2.src}
        alt="blob1"
        className="blob1 animate-float absolute z-[-1] w-[250px] sm:w-[150px]  top-[90vh] right-0 rotate-45"
      />
      <img
        src={blob3.src}
        alt="blob1"
        className="blob1 animate-float absolute z-[-1] w-[250px] sm:w-[150px]  top-[385vh] right-90 rotate-45"
      />
      <img
        src={blob4.src}
        alt="blob1"
        className="blob1 animate-float absolute z-[-1] w-[250px] sm:w-[150px]  top-[585vh] right-0 rotate-45"
      />
      {/* Hero section */}
      <section
        id="home"
        className="relative flex flex-col justify-center items-center text-white min-w-full h-[110svh]  overflow-hidden"
      >
        {/* {isMobile? <></> : <Aurora /> } */}
        <div className="w-full h-[15vh]" />
        <div className="flex flex-col justify-between h-[57vh] w-full items-center accent-slate-700 ">
          <div className="gradient-text-prime">
            {isMobile ? <TeamExeMob /> : <TeamExe />}
          </div>

          <div className="mainContent text-2xl sm:text-xl w-[60vw] sm:w-[80vw] text-center">
            A Technical Endeavour affiliated to the Department of
            <br />{" "}
            <span className="text-[#D29DFF]">
              Computer Science and Engineering
            </span>
            ,<br></br>
            <span className="text-[#ffffff]">
              <b>NIT Hamirpur</b>{" "}
            </span>
          </div>

          <div className="flex items-center justify-center h-[15vh] gap-8 ssm:gap-6 w-full">
            <a
              href="https://www.linkedin.com/company/exe-nith"
              target="_blank"
              className="social-links-div"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/Teamexe"
              target="_blank"
              className="social-links-div"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="mailto:exe.nimbus@nith.ac.in"
              target="_blank"
              className="social-links-div"
              rel="noopener noreferrer"
            >
              <Email />
            </a>
            <a
              href="https://www.instagram.com/teamexenith"
              target="_blank"
              className="social-links-div"
              rel="noopener noreferrer"
            >
              <Insta />
            </a>

            <a
              href="https://twitter.com/nimbusteameXe"
              target="_blank"
              className="social-links-div"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-end h-[15vh] gap-6 w-full">
          <hr className="w-[25vw]  border-b-2 animate-pulse border-[#d0adee] my-4 mx-auto" />
          <p className=" text-3xl sm:text-[1.2rem]  text-[#ffffff] shadow-md flex justify-center flex-col m-[-5vw] items-center font-[400] text-center font-aldrich">
            Where Ideas Meet Innovation
          </p>
          <hr className="w-[25vw]  border-b-2 animate-pulse border-[#d0adee] my-4 mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Hero;
