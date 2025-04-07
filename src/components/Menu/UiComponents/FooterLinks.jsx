import React from "react";

const FooterLinks = ({ openFaqs }) => {
  return (
    <div className="flex flex-wrap text-[18px] ssm:text-[17px] w-[480px] lg:w-[280px] msmd:w-[254px] ssm:w-[306px] ssm:order-1 ssm:mb-[25px] font-poppins font-[300]">
      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/" className=" hover:text-purpleSecondary">
          Home
        </a>
      </div>

      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/about" className=" hover:text-purpleSecondary">
          About
        </a>
      </div>

      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/projects/ai-ml" className=" hover:text-purpleSecondary">
          Projects
        </a>
      </div>

      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/#domains" className=" hover:text-purpleSecondary">
          Domains
        </a>
      </div>

      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/our-work/events" className=" hover:text-purpleSecondary">
          Events
        </a>
      </div>

      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/our-work/workshops" className=" hover:text-purpleSecondary">
          Workshops
        </a>
      </div>

      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/our-team" className=" hover:text-purpleSecondary">
          Our Team
        </a>
      </div>

      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <a href="/#contact" className=" hover:text-purpleSecondary">
          Contact
        </a>
      </div>
      <div
        className={`w-[160px] lg:w-[140px] msmd:w-[127px] ssm:w-[102px] my-1`}
      >
        <button onClick={openFaqs} className=" hover:text-purpleSecondary">
          Faqs
        </button>
      </div>
    </div>
  );
};

export default FooterLinks;
