import React from "react";
import Subcard from "../Subcard";

const Theory2 = ({ handleBackClick }) => {
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
          course="Differential Equations"
          course_code="MA-121"
          card_link="https://drive.google.com/drive/folders/1nt99t3Rc2WKylRjq9488fi2jNqoYiKQD?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Engineering Chemistry"
          course_code="CY-101"
          card_link="https://drive.google.com/drive/folders/1B4E66P24mPbyeAGvo3VZ5hR3eM25CPfE?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Introduction to Python and Data Structures"
          course_code="CS-121"
          card_link="https://drive.google.com/drive/folders/1bBwmU1PVHoIAuK9r1AIseYrHIZjnGmiF?usp=drive_link"
          card_delay="0.3"
        />

        <Subcard
          course="Basic Electrical Engineering"
          course_code="EE-101"
          card_link="https://drive.google.com/drive/folders/1PALIaAMeexMb-KxEkrlFisCjEYMcY4aW?usp=drive_link"
          card_delay="0.4"
        />
        <Subcard
          course="Basic Electronics Engineering"
          course_code="EC-101"
          card_link="https://drive.google.com/drive/folders/1fNvT7QIZx7xbThEPWvhhRL5EGqxuNdMY?usp=drive_link"
          card_delay="0.5"
        />
        <Subcard
          course="Energy Environment & Life Science"
          course_code="EN-101"
          card_link="https://drive.google.com/drive/folders/1u3_AByl7i3i4OscKz-eq7VnHfqUzNit5?usp=drive_link"
          card_delay="0.6"
        />
        <Subcard
          course="Enterpreneurship & Marketing Dynamics"
          course_code="MB-101"
          card_link="https://drive.google.com/drive/folders/14AQft-2pV-ddRwaiLiwGhGd3wy5ICS-f?usp=drive_link"
          card_delay="0.7"
        />
      </div>
    </div>
  );
};

export default Theory2;
