import React from "react";
import Subcard from "../Subcard";

const Theory3 = ({ handleBackClick }) => {
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
          course="Engineering Mathematics-III"
          course_code="MA-203"
          card_link="https://drive.google.com/drive/folders/1EDMVACWJuvCkNFxg0mZ9oZ1PMP8EdSUI?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Object Oriented Programming"
          course_code="CS-211"
          card_link="https://drive.google.com/drive/folders/1KG4leJbJX4ms5T--jjeM5CY5fQtaZAae?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Microprocessor and Interfacing"
          course_code="CS-212"
          card_link="https://drive.google.com/drive/folders/1QErEeArB0AeJaRUSgPCj03P5OfSIdhbN?usp=drive_link"
          card_delay="0.3"
        />
        <Subcard
          course="Discrete Structures"
          course_code="CS-213"
          card_link="https://drive.google.com/drive/folders/1K7FOBfUwdYdOnb37Ag3mV1XUBvdkz0v_?usp=drive_link"
          card_delay="0.4"
        />
        <Subcard
          course="Digital Electronics and Logic Design"
          course_code="EC-211"
          card_link="https://drive.google.com/drive/folders/1qDw_3NBVy3j4zxO8sSqc-cSnIXLG6Z36?usp=drive_link"
          card_delay="0.5"
        />
      </div>
    </div>
  );
};

export default Theory3;
