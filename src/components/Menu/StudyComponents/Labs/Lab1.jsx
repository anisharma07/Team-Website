import React from "react";
import Subcard from "../Subcard";

const Lab1 = ({ handleBackClick }) => {
  return (
    <div className=" flex flex-col items-end overflow-auto w-[80%] h-[100%] mb-[65px]">
      <div
        className="cursor-pointer p-2 m-2 rounded-full hover:bg-[#ffffff47] transition-all duration-100 ease-in"
        onClick={handleBackClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="rgba(255, 255, 255, 1)"
        >
          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
        </svg>
      </div>
      <div className="w-full h-full overflow-auto">
        <Subcard
          course="Physics Lab"
          course_code="PH-102"
          card_link="https://drive.google.com/drive/folders/1PvflCCBhzDlNPhdwyCAyAkv8mBwd7IiN?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Communication Skill Lab"
          course_code="HS-102"
          card_link="https://drive.google.com/drive/folders/1CM215bXRLrHOpyWcaWrWhH2C8YA3Om3P?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Engineering Workshop Practice"
          course_code="ME-102"
          card_link="https://drive.google.com/drive/folders/1j63h2Qf5jQQOzEH6-XetYdV20fKllyt3?usp=drive_link"
          card_delay="0.3"
        />
      </div>
    </div>
  );
};

export default Lab1;
