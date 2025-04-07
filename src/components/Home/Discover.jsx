"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

const Discover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const content = [
    {
      title: "Projects",
      description: "Delve Deeper Into exciting projects made by our Team",
      accent: "rgba(18, 62, 88, .4)",
      image: "../assets/images/projects.png",
      imgbg:
        "linear-gradient(135.45deg, rgba(131, 0, 211, 0.4) -28.48%, rgba(24, 0, 39, 0.4) 99.9%)",
      border: "1px solid #8300D3",
      link: "projects/ai-ml",
    },
    {
      title: "Events",
      accent: "rgba(31, 17, 50, .4)",
      description: "Check out our Awesome New Events",
      image: "../assets/images/events.png",
      imgbg:
        "linear-gradient(150.34deg, rgba(198, 0, 83, 0.44) -22.76%, rgba(46, 0, 20, 0.44) 81.86%)",
      border: "1px solid #C60053",
      link: "/our-work/events",
    },
    {
      title: "Workshops",
      accent: "rgba(75, 18, 46, 0.4)",
      description: "Become an Ace with our Elaborate and Amazing Workshops",
      borderCol: "",
      image: "../assets/images/workshops.png",
      imgbg:
        "linear-gradient(143.54deg, rgba(15, 121, 177, 0.44) 9.04%, rgba(0, 0, 0, 0.44) 111.47%)",
      border: "1px solid #0F79B1",
      link: "/our-work/workshops",
    },
  ];
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((tiltRef) => {
      VanillaTilt.init(tiltRef, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    });
  }, []);

  return (
    <div className="w-full h-[120vh] text-center relative">
      <h2 className="w-full text-white text-[50px] font-aldrich font-bold p-4 pt-8 sm:text-[28px]">
        DISCOVER IDEAS <br />{" "}
        <span className="text-purpleSecondary">WITH .EXE</span>
      </h2>

      <div className="absolute w-full flex flex-col justify-center items-center sm:w-[23%] h-[80vh] sm:pt-0 sm:mt-10 mt-10 sm:h-[70vh]">
        <div className="w-[10px] z-[1] left-[50%] sm:left-[13%] h-[70vh] sm:h-[60vh] bg-[#ffffFF] rounded-lg animate-pulse opacity-500" />
      </div>

      <div className="absolute mt-10 sm:mt-10 w-full flex flex-col justify-center items-center sm:items-start h-[80vh] sm:pt-0 sm:h-[70vh]">
        <div className="flex relative sm:h-[65vh] sm:ml-[5px] flex-col items-center sm:items-start justify-between w-[max-content] z-10 h-[100%]">
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="flex w-[120px] aspect-square sm:w-[70px] justify-center rounded-full items-center "
              style={{
                background: item.imgbg,
                border: item.border,
                scale: hoveredIndex === index ? 1.2 : 1, // Scale out the hovered item
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <img
                className="animate-float delay-[index*0.1s] "
                src={item.image}
                alt={item.title}
                key={index}
                style={{
                  width: "100px",
                  aspectRatio: 1,
                  transition: "all 0.5s ease",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute w-full flex flex-col justify-between items-center sm:items-start h-[80vh] sm:pt-0 sm:h-[70vh]">
        <div className=" flex flex-row justify-center  w-full ">
          <div className="accordion w-[90%] h-[90vh] sm:items-end justify-between items-end  flex flex-col sm:h-[80vh]">
            {content.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                key={index}
                style={{
                  borderRadius: "10px",
                  background: item.accent,
                  border: "5px solid rgba(255, 255, 255, 0.2)",
                }}
                className={`accordion-item flex sm:overflow-hidden m-3 w-[40%] sm:self-end sm:flex-row  sm:p-3 sm:w-[70vw] h-[4560px] sm:h-[200px] overflow-hidden justify-center items-center  rounded-[15px] ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse self-start"
                }`}
                ref={(ref) => (tiltRefs.current[index] = ref)}
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="flex accord w-[100%] h-full flex-col justify-center items-center"
                >
                  <div className="w-[80%]">
                    <div className="accordion-title londrina-solid-font text-[3rem] sm:text-[2rem] text-white">
                      {item.title}
                      <hr className="bg-gray animate-pulse h-[2px] w-[80%] mt-[-5px] rounded-lg" />
                      <div className=" h-[2px] " />

                      <div className="font-aldrich text-[1.5rem] sm:text-[1.2rem] text-white">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
