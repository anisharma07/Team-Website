"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbtn = ({
  btn_title,
  BtnImage,
  btn_href,
  btn_delay,
  clickCallbackFunction,
}) => {
  return (
    <motion.div
      className="relative mb-4 h-[60px] w-[260px] font-aldrich text-[30px] font-[400]"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: Number(`${btn_delay}`),
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
    >
      <div className="absolute top-[-1px] left-[-1px] w-[262px] h-[62px] btn-trans-absolute"></div>
      <a
        onClick={clickCallbackFunction}
        href={btn_href}
        className="absolute top-0 left-0 btn-trans sheen flex items-center h-full w-full"
      >
        <div className="ml-4 pr-2">
          <BtnImage />
        </div>
        <p className="ml-1">{btn_title}</p>
      </a>
    </motion.div>
  );
};

export default Navbtn;
