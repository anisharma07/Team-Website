"use client";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "@src/components/ui/Loader";
import Container from "./components/Container";
import "../styles.css";
import { currEvents } from "../components/constants";
import ScrollToTopButton from "../components/ScrollToTop";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 786);
      }
    };
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
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
    <>
      <Loader />
    </>
  ) : (
    <div className="w-full min-h-[100svh] pt-4">
      <ScrollToTopButton />
      <div className="fixed z-[-1] top-0 left-0 w-full h-screen setBackgroundImage"></div>

      <Container eventsData={currEvents} isMobile={isMobile} />
    </div>
  );
};

export default Page;

// {
//   "description": "Lorem ipsum dolor sit amet consectetur. Fermentum velit integer aliquam dictumst interdum neque id magnis blandit. Pellentesque consectetur rhoncus mi nulla et eu malesuada dictumst amet. Orci ut tellus tempus quam aenean vulputate. Nisi suscipit sit lobortis pellentesque nibh urna..",
//   "description_link": "www.google.com",
//   "end_date": "2024-04-13T18:00:00",
//   "image_url": "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/paradox_2k23_bh5zgb.jpg",
//   "isReversed": false,
//   "isUpcoming": "true",
//   "key": "1",
//   "registeration_link": "https://forms.gle/TaMAqUt2b31gRyrL8",
//   "start_date": "2024-04-12T09:00:00",
//   "title": "PARADOX 2K24",
//   "type": "event",
//   "year": 2024
// },
// {
//   "description": "Lorem ipsum dolor sit amet consectetur. Fermentum velit integer aliquam dictumst interdum neque id magnis blandit. Pellentesque consectetur rhoncus mi nulla et eu malesuada dictumst amet. Orci ut tellus tempus quam aenean vulputate. Nisi suscipit sit lobortis pellentesque nibh urna..",
//   "description_link": "/events",
//   "end_date": "2024-04-12T15:00:00",
//   "image_url": "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/trade_and_code_ykvzaj.jpg",
//   "isReversed": true,
//   "isUpcoming": true,
//   "key": "2",
//   "registeration_link": "https://forms.gle/TaMAqUt2b31gRyrL8",
//   "start_date": "2024-04-11T13:00:00",
//   "title": "CODE BREAKERS",
//   "type": "event",
//   "year": 2024
// },
