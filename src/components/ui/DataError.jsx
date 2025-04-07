import React from "react";
import "../loader.css";

const DataError = () => {
  return (
    <div className="fixed flex p-2 px-8 flex-col text-center text-[18px] justify-evenly items-center w-full h-[100svh] top-0 left-0 z-[100] bg-[#151A22] font-spaceGrotesk text-white">
      <img
        src="/assets/images/error404.png"
        alt="error-data-fetch"
        className="w-[300px]"
      />
      <div className="w-full">
        <p className=" text-[28px]">Ops!</p>
        <p className="text-[28px]">Error Fetching Data</p>
      </div>

      <p className="font-aldrich text-[#58B8E3]">
        Try reloading the page or try again after some time
      </p>
      <p className="font-poppins">
        If the problem occurs again, try contacting developers of the website.
      </p>
      <a
        href="/"
        className="p-4 font-poppins font-[300] px-6 backtogradient rounded-[24px]"
      >
        Back to home
      </a>
    </div>
  );
};

export default DataError;
