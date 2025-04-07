import React from "react";
import Subcard from "../Subcard";

const Theory6 = ({ handleBackClick }) => {
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
          course="PYQs"
          course_code=""
          card_link="https://drive.google.com/drive/folders/1ot0j6H2ePu20S-UL5mQ4Td_HYkyFkMRk?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Sem-VI-Syllabus"
          course_code=""
          card_link="https://drive.google.com/file/d/1HEeOOvj57zXJB-Qiv48N_FfwWKMB6J3e/view?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="OET-Syllabus"
          course_code=""
          card_link="https://drive.google.com/file/d/1LuZRI4TLNBpWbDDuZ_MGeD0J7aGSVaNI/view?usp=drive_link"
          card_delay="0.3"
        />
      </div>
    </div>
  );
};

export default Theory6;
