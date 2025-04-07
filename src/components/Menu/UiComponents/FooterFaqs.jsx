import React from "react";
import { Email, Github, LinkedIn, Twitter, Insta } from "../../Home/svgs";

const FooterFaqs = () => {
  return (
    <div className="flex pt-4 md:absolute md:w-full md:bottom-2 md:right-0 justify-center gap-6 md:gap-4 absolute bottom-0 left-0 w-[100%] h-[150px] md:transform md:scale-75">
      <a
        href="https://www.linkedin.com/company/exe-nith"
        target="_blank"
        className="social-links-div-faqs flex justify-center items-center w-[65px] h-[65px] p-2 rounded-full"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/Teamexe"
        target="_blank"
        className="social-links-div-faqs flex justify-center items-center w-[65px] h-[65px] p-2 rounded-full"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        href="mailto:exe.nimbus@nith.ac.in"
        target="_blank"
        className="social-links-div-faqs flex justify-center items-center w-[65px] h-[65px] p-2 rounded-full"
        rel="noopener noreferrer"
      >
        <Email />
      </a>
      <a
        href="https://www.instagram.com/teamexenith"
        target="_blank"
        className="social-links-div-faqs flex justify-center items-center w-[65px] h-[65px] p-2 rounded-full"
        rel="noopener noreferrer"
      >
        <Insta />
      </a>

      <a
        href="https://twitter.com/nimbusteameXe"
        target="_blank"
        className="social-links-div-faqs flex justify-center items-center w-[65px] h-[65px] p-2 rounded-full"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
      <p className="font-poppins absolute w-full text-center bottom-5 text-[18px]">
        <span className="font-aldrich">Contact Us: </span>exe.
        <a
          href="https://festnimbus.nith.ac.in/"
          className="text-purpleSecondary"
        >
          nimbus
        </a>
        @nith.ac.in
      </p>
    </div>
  );
};

export default FooterFaqs;
