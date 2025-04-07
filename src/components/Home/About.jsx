import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Picture1 from "../../../public/assets/images/currentPic.jpeg";
import Picture2 from "../../../public/assets/images/team.jpeg";
import Picture3 from "../../../public/assets/images/team-img-4.png";
import Picture4 from "../../../public/assets/images/team-img-2.png";
import Picture5 from "../../../public/assets/images/team-img-5.png";
import Picture6 from "../../../public/assets/images/IMG_8639.jpg";
import Picture7 from "../../../public/assets/images/team-img-6.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useMemo } from "react";

const AboutDesktop = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 0.75], [1, 3.5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0, 1]);
  const divOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [0, 0, 1]);
  const divContOpacity = useTransform(
    scrollYProgress,
    [0, 0.89, 0.9],
    [0, 0, 1]
  );
  const memoizedScales = useMemo(
    () => ({
      scale4,
      scale5,
      scale6,
      scale8,
      scale9,
    }),
    [scale4, scale5, scale6, scale8, scale9]
  );

  const pictures = [
    {
      src: Picture1,
      scale: memoizedScales.scale4,
    },
    {
      src: Picture2,
      scale: memoizedScales.scale5,
      opacity,
    },
    {
      src: Picture3,
      scale: memoizedScales.scale6,
      opacity,
    },
    {
      src: Picture4,
      scale: memoizedScales.scale5,
      opacity,
    },
    {
      src: Picture5,
      scale: memoizedScales.scale6,
      opacity,
    },
    {
      src: Picture6,
      scale: memoizedScales.scale8,
      opacity,
    },
    {
      src: Picture7,
      scale: memoizedScales.scale9,
      opacity,
    },
  ];

  return (
    <>
      <section id="about" className="text-white w-[100%] h-[300vh] sm:hidden">
        <div ref={container} className={styles.container}>
          <div className={styles.sticky}>
            {pictures.map(({ src, scale, opacity }, index) => {
              return (
                <motion.div
                  key={index}
                  style={{ scale, opacity }}
                  className={styles.el}
                >
                  <div className={styles.imageContainer}>
                    <Image src={src} fill alt="image" placeholder="blur" />
                  </div>
                </motion.div>
              );
            })}
            <motion.div
              style={{
                scale: memoizedScales.scale4,
                opacity: divOpacity,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(5px)",
              }}
              className={styles.el}
            >
              <motion.div
                style={{
                  opacity: divContOpacity,
                }}
                className={styles.imageContainer}
              >
                <div className="w-[80%] ml-[10%] h-[100%] flex flex-col justify-center items-center text-center opacity-80">
                  <h2 className="text-[orange] text-center font-aldrich text-[18px]">
                    About Our Team
                  </h2>
                  <hr className="bg-[orange] mt-[-5px] rounded-lg" />
                  <p className="text-[white] text-center font-aldrich text-[8px]">
                    We are a group of passionate individuals united by a shared
                    commitment to delivering excellence in every aspect of our
                    work. With a blend of creativity, expertise, and dedication,
                    we strive to exceed expectations and make a meaningful
                    impact in everything we do. Our diverse team brings together
                    a wealth of knowledge, skills, and perspectives, allowing us
                    to approach projects from multiple angles and find unique
                    solutions.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="text-white w-full h-screen overflow-hidden hidden sm:block relative"
        style={{
          backgroundImage: `url(../../../assets/images/team-img-1.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-[100%] h-full flex flex-col justify-center items-center text-center"
          style={{
            backdropFilter: "blur(5px)",
            background: "rgba(0,0,0,0.5)",
            color: "orange",
          }}
        >
          <h2 className="text-orange text-center font-aldrich text-3xl">
            About Our Team
          </h2>
          <hr className="bg-orange mt--5 rounded-lg" />
          <p className="text-white text-center font-aldrich text-lg">
            We are a group of passionate individuals united by a shared
            commitment to delivering excellence in every aspect of our work.
            With a blend of creativity, expertise, and dedication, we strive to
            exceed expectations and make a meaningful impact in everything we
            do.
          </p>
        </div>
      </section>
    </>
  );
};

const AboutMoblie = () => {
  const pictures = [
    {
      src: "../../../assets/images/team.jpeg",
    },
    {
      src: "../../../assets/images/team-img-4.png",
    },
    {
      src: "../../../assets/images/team-img-6.jpg",
    },
    {
      src: "../../../assets/images/team-img-2.png",
    },
    {
      src: "../../../assets/images/team-img-5.png",
    },
    {
      src: "../../../assets/images/IMG_8639.jpg",
    },
  ];

  return (
    <>
      <section id="about" className="text-white  h-max w-full  relative">
        <div>
          {pictures.map((pic, index) => (
            <div className="figure animate-float" key={index}>
              <img src={pic.src} alt={`Photo ${index}`} />
            </div>
          ))}
          <div
            className="w-[100%] top-[-100%] h-full flex flex-col justify-center items-center text-center"
            style={{
              backdropFilter: "blur(5px)",
              background: "rgba(0,0,0,0.5)",
              color: "orange",
            }}
          >
            <h2 className="text-orange text-center font-aldrich text-3xl">
              About Our Team
            </h2>
            <hr className="bg-orange mt--5 rounded-lg" />
            <p className="text-white text-center font-aldrich text-lg">
              We are a group of passionate individuals united by a shared
              commitment to delivering excellence in every aspect of our work.
              With a blend of creativity, expertise, and dedication, we strive
              to exceed expectations and make a meaningful impact in everything
              we do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const About = ({ isMobile }) => {
  return isMobile ? <AboutMoblie /> : <AboutDesktop />;
};

export default About;
