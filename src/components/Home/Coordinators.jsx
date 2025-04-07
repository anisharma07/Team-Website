"use client";
import React, { useRef, useEffect } from "react";
import "./Coordinators.css";
const Card = ({ name, image, designation, link, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.style.opacity = 1;
          cardRef.current.style.transform = "scale(1) translateY(0)";
        } else {
          cardRef.current.style.opacity = 0;
          cardRef.current.style.transform = "scale(0.5) translateY(20px)";
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(cardRef.current);

    return () => {
      cardRef.current.style.transform = "scale(0.5) translateY(20px)";
      observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      ref={cardRef}
      className={`w-[80%] coordCard h-[40vh]  flex items-center inter-font m-4 ${
        index % 2 === 0
          ? "flex-row-reverse sm:flex-col"
          : "flex-row sm:flex-col"
      } justify-center cordCard`}
      style={{
        opacity: 0,
        transform: "scale(0.5) translateY(20px) ",
        transitionDuration: "0.5s",
      }}
    >
      <img
        src={image}
        alt="image"
        className="w-[200px]  object-cover rounded-full"
      />
      <div className="mt-3 flex justify-center items-center flex-col w-[30%] sm:w-[100%]">
        <p className=" text-[#9B75FF] font-poppins text-[2rem] sm:text-[1.5rem]">
          {designation}
        </p>
        <h3 className=" m-4 text-white font-aldrich font-[500] text-[1.5rem] sm:text-[1.2rem]">
          {name}
        </h3>
      </div>
    </a>
  );
};

const Coordinators = () => {
  const CoordArr = [
    {
      name: "Dr. T.P. Sharma",
      image: "../assets/coord/tpsharma.png",
      designation: "Faculty Incharge",
      link: "https://in.linkedin.com/in/tp-sharma-253a0039",
    },
    {
      name: "Mr. Aryan Prasher",
      image: "../assets/coord/aryan.png",
      designation: "Club Co-ordinator",
      link: "https://www.linkedin.com/in/aryan-prasher",
    },
    {
      name: "Mr. Akhil Jamwal",
      image:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711555916/membersexe%402024/akhil_gj7osj.jpg",
      designation: "Club Co-ordinator",
      link: "https://in.linkedin.com/in/akhil-jamwal-7b9502228",
    },
  ];

  return (
    <div className="w-full h-[160vh]">
      <div className="sr-only">
        Co-ordinators For Such a Great Company arr our Notable Faculty Incharge
        MR T.P. Sharma Sir along side our great guides anda aides mr Akhil
        Jamwal Sir and MR Aryan Prasher Sir
      </div>
      <h2 className="w-full h-[20vh] flex justify-center items-center text-white text-[50px] font-bold font-aldrich p-4 pt-8 sm:text-[28px]">
        CO-<span className="text-purpleSecondary">ORDINATORS</span>
      </h2>
      <br />
      <div className="w-full h-[120vh] sm:mt-6 flex flex-col justify-evenly items-center cordContainer">
        {CoordArr.map((coord, index) => (
          <Card
            key={index}
            name={coord.name}
            image={coord.image}
            designation={coord.designation}
            link={coord.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Coordinators;
