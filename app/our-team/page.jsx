"use client";
import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { db } from "../api/FirebaseConfig";
import Loader from "@src/components/ui/Loader";
import "./style.css";
import DataError from "@src/components/ui/DataError";
import TopScroll from "./components/TopScroll";

const Page = () => {
  const [members, setMembers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDataFetched, setDataFetch] = useState(false);
  useEffect(() => {
    const DataFetch = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1500);
    };

    DataFetch();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const membersRef = ref(db, "members");
      try {
        const snapshot = await get(membersRef);
        if (snapshot.exists()) {
          const usersArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setMembers(usersArray);
        } else {
          console.log("No data available");
        }
        setDataFetch(true);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return isError ? (
    <>
      <DataError />
    </>
  ) : !isLoaded || !isDataFetched ? (
    <>
      <Loader />
    </>
  ) : (
    <div className="w-[100%] min-h-[100svh] flex flex-col items-center text-white">
      <Header />
      <div className="fixed z-[-1] w-full h-screen setBackgroundImage"></div>
      <div className="fixed z-[-1] teams-gradient-1 w-[100%] h-[105vh]"></div>
      <div className="fixed z-[-1] teams-gradient-2 w-[100%] h-[100vh]"></div>
      <Container members={members} />
      <TopScroll />
    </div>
  );
};

export default Page;
