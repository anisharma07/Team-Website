import React from "react";
import { Link } from "react-scroll";

const JumptoButtons = ({ btn_number, year_id, status }) => {
  return (
    <Link
      to={year_id}
      smooth={true}
      duration={500}
      className={`${
        status === 1 ? "bg-white" : ""
      } rounded-full w-[50px] h-[50px] flex items-center justify-center ${
        status === 1 ? "text-black" : "text-white"
      } border-[1px] border-white text-[23px] cursor-pointer font-aldrich transition-all ease-in duration-100`}
    >
      {btn_number}
    </Link>
  );
};

export default JumptoButtons;
