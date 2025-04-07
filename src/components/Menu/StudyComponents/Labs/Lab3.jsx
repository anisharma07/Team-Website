import React from "react";
import Subcard from "../Subcard";

const Lab3 = ({ handleBackClick }) => {
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
          course="Object Oriented Programming Lab"
          course_code="HS-203"
          card_link="https://github.com/prasher1421/CPP-Codes/tree/main/VSCode%20codes"
          card_delay="0.1"
        />
        <Subcard
          course="Microprocessor and Interfacing Lab"
          course_code="CS-215"
          card_link="https://drive.google.com/drive/folders/1Gp39WVcMLwaCQq_IdbTIreHofszoLDPN?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Digital Electronics and Logic Design Lab"
          course_code="EC-214"
          card_link="https://drive.google.com/drive/folders/1IhrKRZFvOF6WnCDxLrrz-b2pDRajN-cy?usp=sharing"
          card_delay="0.3"
        />
      </div>
    </div>
  );
};

export default Lab3;
