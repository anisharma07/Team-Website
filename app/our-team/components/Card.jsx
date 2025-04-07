"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({
  card_id,
  member_name,
  member_imgUrl,
  member_tagline,
  member_github,
  member_linkedIn,
  card_posi,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const playNetflixSound = () => {
    const audio = new Audio("../../../assets/audio/netflix.mp3");
    audio.play();
  };
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 0,
    });
  }, []);
  return (
    <motion.div
      id={`card-${card_id}`}
      className="members-card-div relative m-4 members-card pt-[30px] px-[30px] flex flex-col items-center w-[280px] min-h-[412px] bg-[#ffffff0a] border-[2px] border-[#ffffff0d] rounded-[17px] sssm:mx-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      <Image
        src={member_imgUrl}
        width={220}
        height={220}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsSAAALEgHS3X78AAAEa0lEQVRIibWWS2yVRRTHfzPf694+b6Gl3BbUGtH6bIshBFclwgqxRmMIGo248bFw51KNCYnRjYnoypgYdm5Z+AgQESJEIg8hgTalUlpo6e3rPnu/95i5vYU+oBvLSU7y5fvON785/5kzZ4RSiqoZQD3gVJ//r0WABxT08wLIAtYDLlACgjUA6TFrgQQwrUES2ADkgbk1ACw3DauTVWL0gCBUFYpldT3cBwRZMNe835dbp733csPGllCC9kjC473qm8Zma2QhZmba7xobM97S042FIkJQk4xOPtlhH1k+3j1BuTFvW/aq+d3oeWmUAnAl+CZMTLlbXnrf6tMxcRTLC+fVD/myfH5hMjkXLt+M3z14IOhsqrcyi8eUyyFxHIvxv9ShyBJG7WMQWPOuQf8OJvb2X3Jf1nGDg94HBdeehwi9f+HqbciGZtPhU+GXy8ddAZq46r3jF5ztoRDYG0A0gWeCa4BnII79LL/OZt2HBoasgxqwIOutHEx6UDbh2HXn7Uuj7gurSpcdpU//rAspkNDUqUjXC3IFmC3CTNF8dGjIP9fdZaRiAboKtbxHfo0JDVlZdd9AHh2K33huM6fvC0r3yM/7j6q9kSGknnFBQG0KNqfBmoQWA7ZudZqFEHf++eVKTGAoSqYiMgTKDOf2d5tL5FshXarVuZBs937SWRVjhRsLJqbATEBtI+zYIVgMyXuKP4cVjiGJLFXJ6JXO8FBbyh5dFRQGkT0yK3vKxOQDATqrMgwMwyMdilTjXYg+vk7cgFwAygbLESSdiLFJtTuMYmNVUCYTdF/P2J3XJyNCoBxAJgs3JqBto1gSO1uGGwWQlqCmTtDaBM+2C3KG0zM66z+1OHbFGrW1J84m7dLvmZvOzgBFKRLkXXi9FwzjLiiMFQO3FQ/XafkEjq43Q2DWCHan3R87mpOXV5cujKQ/K9YF0iAzpZgpQroVep5eGnd+RDGSFTTagnQjrKsHUTN/1ozZlXazxFaAzp6ZOzCZS3b5ElwliUNF3y6WbICpkuJIP4x7MOXD+hqY1vVkQtmCMyRe+yfv9q4q3cA1o8/XxSkqBVrJZmgaBmYUum5iodREvnj87+m6XVKf97n5TFJ1kHSgZMOcgzjpqVe74MR9pXtxt/Gpb8SRPnJiB5rTgmsZKj44CcWy+9ub22r31CSDK0MBnHPheAmOF0PmElQ8NKL8vgbzi1Wle2iTc7G7y/9eZ5XeqBA26F2uj5lIhO7OJ8yPbMvwP96uPizYSuUdCMyIqbBIv1ui4MD+RPjZBscaXxWkbW+v+Ul9QzDT2lJp9sRSEUhFV1vwVUuDPahjdrQn/tizyTscGT5S5pAUGJwZp4nypX319rfLx9StfGGHFBZ/yMwGz7iBSM+fZwIlFJtS4pRtGneaZNaLUheL8TZEjNBOREfSGtyccIaXceo1qAbQPnWv7NbIWmS1jZvVa9aDMH0nMRauWzqjhqp8Zd3/1gCok0hW74rZxRdInZF+aa9hVn5l8uD9B85G64/q9Yp4AAAAAElFTkSuQmCC"
        alt={member_name}
        className="rounded-[17px] border-[1px] border-[#ffffff1c] mb-12"
      />

      <p
        className="absolute top-[257px] left-0 w-full font-aldrich text-[22px] font-[400] mb-4 text-center leading-8"
        onClick={member_tagline.includes("Netflix") ? playNetflixSound : null}
      >
        {member_name}
      </p>
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="garnish"
            initial={{ scale: 0, x: -150 }} // come from the left
            animate={{
              scale: 1,
              x: 0, // move to original position
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="relative w-full">
        {isHovered && (
          <motion.div
            className="absolute z-[0] top-2 left-12 members-social-links gap-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 17,
            }}
          >
            <a
              href={member_github}
              target="_blank"
              className="github cursor-pointer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.928 0.306213C13.8429 0.306213 11.7782 0.717124 9.85184 1.51548C7.92547 2.31384 6.17513 3.48402 4.70075 4.95919C1.72311 7.93845 0.050293 11.9792 0.050293 16.1925C0.050293 23.2142 4.60718 29.1716 10.9106 31.2844C11.7045 31.4115 11.9585 30.9191 11.9585 30.4901V27.8053C7.56043 28.7585 6.62365 25.6766 6.62365 25.6766C5.89327 23.8338 4.86123 23.3413 4.86123 23.3413C3.41636 22.3564 4.97237 22.3881 4.97237 22.3881C6.56014 22.4993 7.40165 24.0244 7.40165 24.0244C8.78301 26.4391 11.117 25.7242 12.0221 25.343C12.165 24.3104 12.5778 23.6114 13.0223 23.2142C9.4975 22.8171 5.79801 21.4508 5.79801 15.3982C5.79801 13.6348 6.40136 12.2209 7.43341 11.093C7.27463 10.6958 6.71891 9.04366 7.59218 6.89902C7.59218 6.89902 8.92591 6.47009 11.9585 8.51941C13.2129 8.16992 14.5784 7.99517 15.928 7.99517C17.2776 7.99517 18.643 8.16992 19.8974 8.51941C22.93 6.47009 24.2637 6.89902 24.2637 6.89902C25.137 9.04366 24.5813 10.6958 24.4225 11.093C25.4546 12.2209 26.0579 13.6348 26.0579 15.3982C26.0579 21.4667 22.3425 22.8012 18.8018 23.1983C19.3734 23.6908 19.8974 24.6599 19.8974 26.1373V30.4901C19.8974 30.9191 20.1514 31.4274 20.9612 31.2844C27.2646 29.1557 31.8056 23.2142 31.8056 16.1925C31.8056 14.1063 31.3949 12.0405 30.597 10.1131C29.7991 8.18566 28.6295 6.43437 27.1552 4.95919C25.6808 3.48402 23.9304 2.31384 22.0041 1.51548C20.0777 0.717124 18.013 0.306213 15.928 0.306213Z"
                  fill="#BEA5FF"
                />
              </svg>
            </a>
            <a
              href={member_linkedIn}
              target="_blank"
              className="linkedin cursor-pointer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.725 0.854614C29.6652 0.854614 30.5669 1.22811 31.2317 1.89295C31.8966 2.55778 32.2701 3.45949 32.2701 4.39971V29.2153C32.2701 30.1556 31.8966 31.0573 31.2317 31.7221C30.5669 32.3869 29.6652 32.7604 28.725 32.7604H3.90935C2.96913 32.7604 2.06742 32.3869 1.40259 31.7221C0.737757 31.0573 0.364258 30.1556 0.364258 29.2153V4.39971C0.364258 3.45949 0.737757 2.55778 1.40259 1.89295C2.06742 1.22811 2.96913 0.854614 3.90935 0.854614H28.725ZM27.8387 28.3291V18.9346C27.8387 17.402 27.2299 15.9322 26.1462 14.8486C25.0626 13.7649 23.5928 13.1561 22.0602 13.1561C20.5536 13.1561 18.7987 14.0778 17.9479 15.4604V13.4929H13.0025V28.3291H17.9479V19.5904C17.9479 18.2256 19.0469 17.1089 20.4118 17.1089C21.0699 17.1089 21.7011 17.3703 22.1665 17.8357C22.6319 18.3011 22.8933 18.9323 22.8933 19.5904V28.3291H27.8387ZM7.24174 10.71C8.03152 10.71 8.78895 10.3962 9.34741 9.83777C9.90587 9.27931 10.2196 8.52187 10.2196 7.73209C10.2196 6.08362 8.8902 4.73649 7.24174 4.73649C6.44725 4.73649 5.68531 5.0521 5.12352 5.61388C4.56174 6.17567 4.24613 6.93761 4.24613 7.73209C4.24613 9.38056 5.59327 10.71 7.24174 10.71ZM9.70558 28.3291V13.4929H4.79562V28.3291H9.70558Z"
                  fill="#BEA5FF"
                />
              </svg>
            </a>
          </motion.div>
        )}
        {!isHovered && (
          <motion.div
            className="memberTagline my-2 space-grotesk-font text-[16px] text-purpleSecondary text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
          >
            {member_tagline}
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="garnish"
            initial={{ scale: 0, x: 150 }} // come from the left
            animate={{
              scale: 1,
              x: 0, // move to original position
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            // exit={{
            //   scale: 0,
            //   x: -100, // exit to the right
            //   transition: {
            //     type: "spring",
            //     stiffness: 260,
            //     damping: 25,
            //   },
            // }}
          ></motion.div>
        )}
      </AnimatePresence>
      {card_posi === "ClubCC" ? (
        <p className="absolute bottom-0 py-1 left-0 right-0 text-center font-aldrich text-[15px] font-[500] bg-[#bea5ff20] text-[#d9d9d9]">
          Core Coordinator
        </p>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Card;
