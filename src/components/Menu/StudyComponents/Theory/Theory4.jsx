import React from "react";
import Subcard from "../Subcard";
const Theory4 = ({ handleBackClick }) => {
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
          course="Organizational Behaviour"
          course_code="HS-203"
          card_link="https://drive.google.com/drive/folders/1M2cSLNgh3Qsr6f-zKeDS1TXQ01KoKE9c?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Data Structures"
          course_code="CS-201"
          card_link="https://drive.google.com/drive/folders/1X4qFFNKDFvwDb2viticWcsu-J_VmPmgf?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Computer Architecture"
          course_code="CS-221"
          card_link="https://drive.google.com/drive/folders/1hZ_e_5l_oMocYrU-JE0sbg4PdnXJFIWH?usp=drive_link"
          card_delay="0.3"
        />
        <Subcard
          course="Operating System"
          course_code="CS-222"
          card_link="https://drive.google.com/drive/folders/1C6r9-iQrYO2BSsRisin6KqsjA81VmAEG?usp=drive_link"
          card_delay="0.4"
        />
        <Subcard
          course="Theory of Computation"
          course_code="CS-223"
          card_link="https://drive.google.com/drive/folders/12eVjUmtPJkAskcdfNjigTwI_H_UNGFtg?usp=drive_link"
          card_delay="0.5"
        />
      </div>
    </div>
  );
};

export default Theory4;
