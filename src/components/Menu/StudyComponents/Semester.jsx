import React from "react";
import Semestercard from "./Semestercard";

const Semester = ({ handleContentClick }) => {
  return (
    <div className="flex flex-wrap justify-center overflow-auto w-[80%] h-[100%] mb-[60px] py-10 ssm:py-4">
      <Semestercard
        semesternum="1"
        contentClick={handleContentClick}
        card_delay="0.05"
      />
      <Semestercard
        semesternum="2"
        contentClick={handleContentClick}
        card_delay="0.1"
      />
      <Semestercard
        semesternum="3"
        contentClick={handleContentClick}
        card_delay="0.15"
      />
      <Semestercard
        semesternum="4"
        contentClick={handleContentClick}
        card_delay="0.2"
      />
      <Semestercard
        semesternum="5"
        contentClick={handleContentClick}
        card_delay="0.25"
      />
      <Semestercard
        semesternum="6"
        contentClick={handleContentClick}
        card_delay="0.3"
      />
    </div>
  );
};

export default Semester;
