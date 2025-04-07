import React from "react";
import SidePanel from "./components/SidePanel";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen w-full flex flex-col items-center relative">
      <div className="fixed z-[-1] projects-gradient-1 w-[100%] h-[100vh]"></div>

      <ScrollToTop />
      <div className="setBackgroundImage fixed top-0 left-0 h-screen w-full z-[-10] text-white"></div>
      {/* <div
          className={`bg-gradient-circle fixed bottom-[-900px] left-[10%] bg-gradient-purple rounded-full z-[0]`}
        ></div> */}
      {/* <div
          className={`bg-gradient-circle fixed bottom-[-900px] right-[-100px] bg-gradient-purple rounded-full z-[0]`}
        ></div> */}
      <div className="londrina-solid-font text-[55px] ssm:text-[40px]  mt-6 ssm:items-center leading-0 gap-4 ssm:gap-0">
        <span className=" text-white ixs:text-[35px]"> OUR </span>
        <span className="text-purpleSecondary ixs:text-[32px]">PROJECTS</span>
      </div>

      <div className="w-full max-w-[1600px] mx-auto">
        <div className="w-full px-24 ssm:px-4 lg:px-8">
          <SidePanel />

          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
