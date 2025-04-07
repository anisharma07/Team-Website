"use client";
import React from "react";

const Aurora = () => {
  return (
    <div className="absolute top-0 right-0 z-[-1] w-full h-full ">
      <style>{`
        @keyframes wave1 {
          0%, 100% {
            transform: translateX(-1.5vw);
          }
          50% {
            transform: translateX(1.5vw);
          }
        }

        @keyframes wave2 {
          0%, 100% {
            transform: translateX(1.5vw);
          }
          50% {
            transform: translateX(-1.5vw);
          }
        }

        .wave-animation1 {
          animation: wave1 6s ease-in-out infinite;
        }

        .wave-animation2 {
          animation: wave2 6s ease-in-out infinite;
        }

     
      `}</style>

      <div
        className="absolute overflow-hidden top-0 left-0 w-full h-full"
        style={{
          filter: "blur(60px)",
        }}
      >
        <div className="w-[100vw] h-[100vh] flex p-4 absolute top-[-38vh] right-[-22vw] rotate-[30deg] overflow-hidden">

          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`w-[5vw] mx-12 h-full bg-[#9b75ff] opacity-[75%] wave-animation${
                index % 2 === 0 ? "1" : "2"
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            />
          ))}
        </div>
        <div className="w-[100vw] h-[100vh] flex p-4 absolute top-[-36vh] right-[-58vw] rotate-[30deg] overflow-hidden">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`w-[3vw] mx-12 h-full bg-[#9b75ff] opacity-[75%] wave-animation${
                index % 2 === 0 ? "1" : "2"
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Aurora;