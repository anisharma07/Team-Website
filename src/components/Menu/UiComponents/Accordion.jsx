import React from "react";
import { motion } from "framer-motion";
import "./accordion.css";
import Image from "next/image";

const Accordion = ({ contents }) => {
  const [active, setActive] = React.useState(null);
  const [heights, setHeights] = React.useState(null);
  const contentRefs = React.useRef([]);
  const handleAccordionItem = (index) => {
    setActive(index);
    if (active === index) {
      setActive(null);
    }
  };

  React.useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, contents.length);
    const elHeights = contents.map(
      (_, index) => contentRefs.current[index].clientHeight
    );
    setHeights([...elHeights]);
  }, [contents]);

  return (
    <div className="block font-aldrich w-[90%] max-w-[500px] h-full  md:transform md:scale-90 ml-[35px]">
      <div className="content mx-0">
        {contents.map((data, index) => {
          const isActive = active === index;
          return (
            <motion.div
              key={index}
              onClick={() => handleAccordionItem(index)}
              className={`feature cursor-pointer ${
                isActive ? " active " : " border-white-1 "
              } ssm:my-2 relative`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: Number(`${(index + 1) * 0.1}`),
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="flex items-center">
                <Image
                  src={"/assets/icons/exeClear.png"}
                  alt={"exe-logo"}
                  width={30}
                  height={30}
                  className={`w-[25px] ${
                    isActive ? "hidden" : "block"
                  } mr-4 transition-all duration-300 hover:scale-150 hover:rotate-180 absolute top-1 left-[-40px] ssm:left-[-30px]`}
                ></Image>
                <p
                  className={`${
                    isActive ? "text-[#ffffff]" : "hover:text-purpleSecondary"
                  } text-[21px] font-[400]`}
                >
                  {data.headline}
                </p>
              </div>

              <div
                className="description-container transition-all duration-200 ease-out font-aldrich"
                style={{
                  height: heights && isActive ? heights[index] : 0,
                }}
              >
                <p
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="description"
                >
                  {data.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
