import React from "react";
import Subcard from "../Subcard";
import ComingSoon from "../ComingSoon";

const Theory5 = ({ handleBackClick }) => {
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
          course="Algorithms Design"
          course_code="CS-311"
          card_link="https://drive.google.com/drive/folders/1zwI6CIKcKygpz1SD8M2E0J15UKG8vZMi?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Database Management"
          course_code="CS-312"
          card_link="https://drive.google.com/drive/folders/1GNUXNT52N69Crqj2jTshreytx6lQFbpE?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Compiler Design"
          course_code="CS-313"
          card_link="https://drive.google.com/drive/folders/1nZ9kWuy1GXnV6A80gVKuzal6USd8ZaMr?usp=drive_link"
          card_delay="0.3"
        />
        <Subcard
          course="Computer Graphics"
          course_code="CS-314"
          card_link="https://drive.google.com/drive/folders/1ZjjNaIDe-znFjCRhMpXYkkFkmkMri70N?usp=drive_link"
          card_delay="0.4"
        />
        <Subcard
          course="PYQ's 2024"
          course_code=""
          card_link="https://drive.google.com/drive/folders/1e16R_VvnT-6pcWwL6o4KqggeRyAcVeMc?usp=drive_link"
          card_delay="0.5"
        />
      </div>
    </div>
  );
};

export default Theory5;
