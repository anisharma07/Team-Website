import React, { useRef, useEffect, useState } from "react";
import "./DomainCards.css"; // Import CSS file for additional styles

const DomainCards = ({ title, content, isGif, src, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isEven = index % 2 === 0; // Check if the index is even

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust the threshold as needed
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      ref={cardRef}
      className={`DomainCards flex items-center justify- p-4 rounded-sm ${
        isVisible ? "visible" : ""
      } ${isEven ? "even" : "odd"}`}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="aldrich-font text-center text-[#BEA5FF] text-[2rem]">
          {title}
        </h2>
      </div>
      <div className="w-[90%] aspect-[1/1] overflow-hidden flex justify-center items-center ">
        <img
          src={src}
          onLoad={handleImageLoad}
          className={`DomainCardImage ${isLoading ? "hidden" : "block"}`}
          alt={title}
        />
        {isLoading && <div className="cardLoader">Loading...</div>}
      </div>
      <p className="text-[1.2rem] text-center font-spaceGrotesk">{content}</p>
    </div>
  );
};

export default DomainCards;
