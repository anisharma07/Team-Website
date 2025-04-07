import React from "react";

const Page = () => {
  return (
    <div className="page-container mt-[65px] text-white min-h-screen flex flex-col justify-center items-center text-center font-poppins font-[300]">
      <div className="fixed z-[-1] top-0 left-0 w-full h-screen setBackgroundImage"></div>

      <h2 className="header-text text-[45px] leading-0 font-aldrich font-[600]">
        TEAM <span className="text-[#D29DFF] ">.EXE</span>
      </h2>
      <hr className="w-16 border-b-2 border-[#D29DFF] animate-pulse" />
      <div className="content mt-8 text-lg w-[80%] sm:w-[90%] sm:text-xl ">
        {/* Generate Some text about Team EXE */}
        <p className="team-description shadow-lg">
          We are a team of passionate and hardworking engineers dedicated to
          adding value to every aspect of tech and development. Not only do we
          adhere to a strong commitment to technology, but we also love to add
          value to society and the world as a whole. We strive to innovate,
          collaborate, and create solutions that push the boundaries of what's
          possible.
          <br />
          <br />
          Join us and experience the wonders that the tech world has to offer
          with us. It's assured that you will never feel the same again.
          Together, we embark on a journey of continuous learning, growth, and
          impact. With Team .EXE, the possibilities are endless, and the future
          is bright. Let's shape the world together, one line of code at a time.
        </p>
        <br />
        <br />
        <p className="subheading text-2xl  text-[#d7b7f3] shadow-md flex justify-center flex-col items-center font-[400]">
          Where Ideas Meet Innovation
        </p>
        <hr className="w-16 border-b-2 border-[#d0adee] my-4 mx-auto" />
      </div>
      <div className="video-container mt-8 mb-12 mx-auto w-[560px] h-[315px] relative ssm:w-[350px] ssm:h-[280px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/AfGBmu1eRYs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
