import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <motion.div
      className="font-aldrich text-[30px] text-purpleSecondary font-[600] w-full h-full flex justify-center items-center overflow-hidden "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <p className="bg-[#00000044] rounded-full p-2 px-4">COMING SOON...</p>
    </motion.div>
  );
};

export default ComingSoon;
