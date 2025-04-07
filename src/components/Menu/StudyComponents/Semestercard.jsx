import React from "react";
import { motion } from "framer-motion";

const Semestercard = ({ semesternum, contentClick, card_delay }) => {
  return (
    <motion.div
      className="relative sembuttondiv w-[250px] h-[60px] bg-[#02020279] p-8 sm:p-7 m-2 mr-4 ml-4 flex flex-col font-poppins rounded-full sm:rounded-[35px] overflow-hidden"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: Number(`${card_delay}`),
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="semester font-poppins w-full h-full text-[27px] flex items-center justify-center absolute z-[1] top-0 left-0 bg-[#00000058]  transition-all duration-200 ease-in">
        <p>Semester {semesternum}</p>
      </div>
      <div
        className="theory-card w-[50%] h-full absolute  top-0 left-0 text-[23px] flex items-center justify-center  cursor-pointer hover:bg-[#ffffff29] font-aldrich  opacity-0"
        onClick={() => contentClick(`Theory${semesternum}`)}
      >
        <p>Theory</p>
      </div>
      <div
        className="lab-card w-[50%] h-full absolute  top-0 right-0 font-aldrich text-[23px] flex items-center justify-center  border-l-2 border-[#ffffff3b] cursor-pointer hover:bg-[#ffffff29] opacity-0"
        onClick={() => contentClick(`Lab${semesternum}`)}
      >
        <p>Labs</p>
      </div>
    </motion.div>
  );
};

export default Semestercard;
