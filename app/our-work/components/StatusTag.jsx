import React from "react";

const StatusTag = ({ scroll_id, section_status }) => {
  return (
    <div
      id={scroll_id}
      className="flex flex-col w-[full] items-center mb-[50px]"
    >
      <p className="text-[#4ED4FF] text-[45px] font-bold font-aldrich sm:text-[33px] leading-0">
        {section_status}
      </p>
      <div className="w-[100px] h-[3px] bg-[#4ED4FF]"></div>
    </div>
  );
};

export default StatusTag;
