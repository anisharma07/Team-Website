"use client";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "@src/components/ui/Loader";
import WorkshopContainer from "./components/WorkshopContainer";
import ScrollToTopButton from "../components/ScrollToTop";
import "../styles.css";
import { currWorkshops } from "../components/constants";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const DataFetch = () => {
      document.body.classList.add("hide-scrollbar");
      setTimeout(() => {
        document.body.classList.remove("hide-scrollbar");
        setIsLoaded(true);
      }, 2000);
    };
    DataFetch();
  }, []);


  return !isLoaded ? (
    <Loader />
  ) : (
    <div className="w-full min-h-[100svh] pt-4">
      <ScrollToTopButton />
      <div className="fixed z-[-1] top-0 left-0 w-full h-screen setBackgroundImage"></div>

      <WorkshopContainer eventsData={currWorkshops} isMobile={isMobile} />
    </div>
  );
};

export default Page;
