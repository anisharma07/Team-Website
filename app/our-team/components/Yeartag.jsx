import React from "react";

const Yeartag = ({ scroll_id, year_name, mobile_ignore }) => {
  return (
    <div
      id={scroll_id}
      className="flex flex-col items-center justify-center year w-[full] h-[160px] py-4 pt-0"
    >
      <p className="text-[#4ED4FF] text-[38px] font-bold font-poppins sm:text-[33px]">
        {year_name}
      </p>
      <div className="w-[100px] h-[2px] bg-[#4ED4FF]"></div>
    </div>
  );
};

export default Yeartag;
