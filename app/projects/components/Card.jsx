"use client";
import React from "react";
import ClampLines from "react-clamp-lines";

const Card = ({
  title,
  index,
  description,
  tech_stack,
  explore_link,
  img_link,
}) => {
  return (
    <div className="relative w-full my-8 flex justify-between ssm:flex-col-reverse ssm:min-h-[520px] p-8 px-16 ssm:px-8 rounded-[40px] cursor-pointer overlay">
      {/* description box */}
      <div className="flex flex-col h-full this-is-flex-child-1 py-[50px] ssm:py-0 pl-2 pr-8 ssm:pl-0 ssm:pr-0 pt-[70px]">
        <h1 className="block ssm:hidden absolute ssm:static top-[30px] left-[70px] ssm:w-full ssm:text-start text-[35px] font-bold text-purpleSecondary mb-4">
          {index + ". " + title.toUpperCase()}
        </h1>
        <h1 className="hidden ssm:block absolute ssm:static top-[30px] left-[70px] ssm:w-full ssm:text-start text-[35px] font-bold text-purpleSecondary mb-4">
          {index + ". " + title}
        </h1>
        <div className="flex flex-wrap mb-8 ssm:mb-4">
          {tech_stack.map((tech, index) => (
            <span
              key={index}
              className="p-1 px-3 m-1 bg-blueSecondary rounded-[32px] text-black"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* <p className="text-white font-poppins font-[300]">{description}</p> */}
        <div className="text-white text-justify font-poppins font-[300] overflow-auto custom-scrollbar-really-unique pr-[1px]">
          <ClampLines
            text={description}
            id="really-unique-id"
            lines={6}
            ellipsis="..."
            buttons={true}
            innerElement="p"
          />
        </div>
      </div>

      {/* image box  */}
      <div className="flex flex-col items-end w-[350px] lg:w-[300px] h-full ssm:h-[250px] py-[50px] ssm:py-0 ssm:w-full ssm:mb-4">
        <img
          src={img_link}
          alt={title}
          className="w-[350px]  h-[275px] lg:w-[300px]  lg:h-[250px] ssm:w-full rounded-2xl object-cover  mb-16 ssm:mb-2"
        />

        {explore_link ? (
          <a
            href={explore_link}
            className="flex items-center justify-center p-2 w-[100px] font-aldrich px-4 ssm:p-1 ssm:px-2 border-2 ssm:border border-blueSecondary rounded-[32px] text-blueSecondary hover:text-black hover:bg-blueSecondary transition duration-300 ssm:absolute ssm:bottom-3 ssm:right-3"
          >
            Explore
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
