"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Cards.css";

const usePointerGlow = () => {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--xp", xp);
      document.documentElement.style.setProperty("--y", y);
      document.documentElement.style.setProperty("--yp", yp);
      setStatus({ x, y, xp, yp });
    };
    document.body.addEventListener("pointermove", syncPointer);
    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);
  return [status];
};

const Cards = ({ arr }) => {
  usePointerGlow();

  return (
    <div className="cardContainer">
      {arr.map((item, index) => (
        <div key={index}>
          <article data-glow key={index}>
            <h2 className="font-poppins font-[600] text-center text-[#BEA5FF] text-[2rem]">
              {item.title.toUpperCase()}
            </h2>
            <img src={item.image} alt={item.title} />
            <p className="text-[1rem] text-center font-aldrich font-[200]">
              {item.contents}
            </p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Cards;
