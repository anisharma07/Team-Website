import React from "react";
import Subcard from "../Subcard";

const Lab2 = ({ handleBackClick }) => {
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
          course="Engineering Chemistry Lab"
          course_code="CY-102"
          card_link="https://drive.google.com/drive/folders/1hjwspXAkcySSpFyRa8lCZr0FCdqCkh0C?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Electrical & Electronics Engineering Lab"
          course_code="EE-102"
          card_link="https://drive.google.com/drive/folders/1V0Brwov-7xKO5p626oAzabEUFZZ7Gd3u?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Engineering Graphics"
          course_code="CE-101"
          card_link="https://drive.google.com/drive/folders/18HF61uFrX5K_Vp5yoZ4vaC0HUIL_ggUj?usp=drive_link"
          card_delay="0.3"
        />
      </div>
    </div>
  );
};

export default Lab2;
