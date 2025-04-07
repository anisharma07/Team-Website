import React from "react";
import Subcard from "../Subcard";

const Theory1 = ({ handleBackClick }) => {
  return (
    <div className="flex flex-col items-end w-[80%] h-[100%] mb-[65px] overflow-auto">
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
          course="Linear Algebra & Calculus"
          course_code="MA-111"
          card_link="https://drive.google.com/drive/folders/19LmuM3vdY9PY9hllhHrzhmKUxAljBNxL?usp=drive_link"
          card_delay="0.1"
        />
        <Subcard
          course="Engineering Physics"
          course_code="PH-101"
          card_link="https://drive.google.com/drive/folders/1Qfg7XZNDygtTYo9jfvryMqlcndpE3KA4?usp=drive_link"
          card_delay="0.2"
        />
        <Subcard
          course="Introduction to Computer and C Programming"
          course_code="CS-111"
          card_link="https://drive.google.com/drive/folders/1eVuv9MObJ9E-EobV-1Q1neCN7AJB6kT-?usp=drive_link"
          card_delay="0.3"
        />
        <Subcard
          course="Basics of Mechanical Engineering"
          course_code="ME-101"
          card_link="https://drive.google.com/drive/folders/198UWh56_BFcJTN6GX3kQH_Jr681L4uYZ?usp=drive_link"
          card_delay="0.4"
        />
        <Subcard
          course="Communication Skills"
          course_code="HS-101"
          card_link="https://drive.google.com/drive/folders/1GQZIUiUojZ4J0S7OmHLd1xxU5arDyCeT?usp=drive_link"
          card_delay="0.5"
        />
        <Subcard
          course="Human Values and Ethical Mindfulness"
          course_code="HS-103"
          card_link="https://drive.google.com/drive/folders/1Ms-VjHS1ugsCXxzjZB3QyLu4kUozR4Rd?usp=drive_link"
          card_delay="0.6"
        />
      </div>
    </div>
  );
};

export default Theory1;
