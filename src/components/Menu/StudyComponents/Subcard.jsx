import React from "react";
import { motion } from "framer-motion";
const Subcard = ({ course, course_code, card_link, card_delay }) => {
  return (
    <motion.div
      className="w-[100%] min-h-[65px] font-poppins rounded-[28px] mb-2 cursor-pointer hover:bg-[#020202af]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: Number(`${card_delay - 0.05}`),
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <a
        href={`${card_link}`}
        target="_blank"
        className="w-[100%] h-full rounded-[28px] bg-[#02020279] flex flex-col p-2 pl-6 pt-3 sm:p-2 sm:pt-4 sm:pl-6"
      >
        <p className="font-[200] italic text-[18px] leading-[10px] sm:text-[15px] sm:leading-[7px]">
          {course_code}
        </p>
        <p className="font-[400] text-[25px] sm:text-[21px]">{course}</p>
      </a>
    </motion.div>
  );
};

export default Subcard;
