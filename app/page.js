"use client";
import Loader from "@src/components/ui/Loader";
import About from "@src/components/Home/About";
import Discover from "../src/components/Home/Discover";
import Domain from "../src/components/Home/Domain";
import Coordinators from "../src/components/Home/Coordinators";
import Contact from "../src/components/Home/Contact";
import Hero from "../src/components/Home/Hero";
import BottomBar from "@src/components/ui/BottomBar";
import ParticlesJS from "@src/components/ui/particles";
import { useEffect, useState } from "react";
// import { fetchEvents } from "./api/paradox.fetch";
import { MobileContext, useMobileContext } from "@context/MobileContext";
//import { analytics } from "./api/FirebaseConfig";
//import { logEvent } from "firebase/analytics";
import "./globals.css";
export default function Home() {
  //logEvent(analytics, "my_custom_event");
  // const [data, setData] = useState(null);
  const { isMobile } = useMobileContext();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const eventData = await fetchEvents();
  //       setData(eventData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const DataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    DataFetch();
  }, []);

  useEffect(() => {
    if (!isLoading && window.location.hash === "#contact") {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView();
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && window.location.hash === "#domains") {
      const contactElement = document.getElementById("domains");
      if (contactElement) {
        contactElement.scrollIntoView();
      }
    }
  }, [isLoading]);

  return isLoading ? (
    <>
      <Loader />
    </>
  ) : (
    <div className="relative w-full min-h-[100vh]">
      <ParticlesJS />
      {/* <BottomBar /> */}

      <Hero isMobile={isMobile} />
      <About isMobile={isMobile} />

      <Discover />
      <Domain isMobile={isMobile} />
      <Coordinators />
      <Contact />
    </div>
  );
}
