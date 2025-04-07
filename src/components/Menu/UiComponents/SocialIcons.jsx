import React from "react";
import {
  BsTwitterX,
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-6 md:flex-wrap md:w-[140px] ssm:w-[214px] md:gap-4 ">
      <a
        href="https://www.instagram.com/teamexenith"
        target="_blank"
        className=" hover:scale-125 rounded-[3px] transition-all ease-in duration-150"
      >
        <BsInstagram size={30} className="instagram-icon" />
      </a>

      <a
        href="https://www.linkedin.com/company/exe-nith"
        target="_blank"
        className="hover:text-blue-500 hover:bg-white hover:scale-125  rounded-[3px] transition-all ease-in duration-150"
      >
        <BsLinkedin size={30} />
      </a>
      <a
        href="https://github.com/Teamexe"
        target="_blank"
        className="hover:text-[#767676] hover:scale-125  rounded-full transition-all ease-in duration-150"
      >
        <BsGithub size={30} />
      </a>
      <a
        href="https://twitter.com/nimbusteameXe"
        target="_blank"
        className="hover:text-[#5c5c5c] hover:scale-125  rounded-[2px] transition-all ease-in duration-150"
      >
        <BsTwitterX size={30} />
      </a>
      <a
        href="https://www.youtube.com/@teamexenith1723"
        target="_blank"
        className="hover:text-red-500 hover:scale-125  rounded-full transition-all ease-in duration-150"
      >
        <BsYoutube size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
