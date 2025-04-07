"use client";
import React from "react";
import Card from "./Card";
import Yeartag from "./Yeartag";
import JumptoButtons from "./JumptoButtons";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Container = ({ members }) => {
  const [activeYear, setActiveYear] = useState([1, 0, 0, 0]);
  const activateYear = (year) => {
    const yearIndex = 4 - year;
    let newActiveYear = [0, 0, 0, 0];
    newActiveYear[yearIndex] = 1;
    setActiveYear(newActiveYear);
  };
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false, // Trigger this multiple times
    threshold: 0.1, // Percentage of the element in view before the callback is triggered
  });

  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView1) {
      activateYear(1);
    } else if (inView2) {
      activateYear(2);
    } else if (inView3) {
      activateYear(3);
    } else if (inView4) {
      activateYear(4);
    }
  }, [inView1, inView2, inView3, inView4]);

  return (
    <div className="w-full ssm:w-full mt-[5vh]">
      <div className="fixed top-[30vh] right-4 flex flex-col-reverse gap-4 z-[1] md:hidden">
        <JumptoButtons
          btn_number={1}
          year_id={"1st-year"}
          status={activeYear[3]}
        />
        <JumptoButtons
          btn_number={2}
          year_id={"2nd-year"}
          status={activeYear[2]}
        />
        <JumptoButtons
          btn_number={3}
          year_id={"3rd-year"}
          status={activeYear[1]}
        />
        <JumptoButtons
          btn_number={4}
          year_id={"4th-year"}
          status={activeYear[0]}
        />
      </div>
      <section id="4th-year" className="min-h-[100vh]" ref={ref4}>
        <Yeartag scroll_id="final-year" year_name={"FINAL YEAR MEMBERS"} />
        <div className="CurrentCCs flex flex-wrap w-[80%] m-auto justify-center ssm:w-full">
          {members.map((member) =>
            member.year === 4 && member.position === "Coordinator" ? (
              <Card
                key={member.id}
                card_id={member.id}
                member_name={member.name}
                member_imgUrl={member.imageURL}
                member_tagline={member.tagline}
                member_github={member.github}
                member_linkedIn={member.linkedin}
              />
            ) : null
          )}
        </div>
        <div className="year-4 flex flex-wrap w-[80%] m-auto justify-center ssm:w-full">
          {members.map((member) =>
            member.year === 4 && member.position !== "Coordinator" ? (
              <Card
                key={member.id}
                card_id={member.id}
                member_name={member.name}
                member_imgUrl={member.imageURL}
                member_tagline={member.tagline}
                member_github={member.github}
                member_linkedIn={member.linkedin}
              />
            ) : null
          )}
        </div>
      </section>

      <section id="3rd-year" className="min-h-[100vh]" ref={ref3}>
        <Yeartag scroll_id="third-year" year_name={"COORDINATORS"} />
        <div className="CurrentCCs flex flex-wrap w-[80%] m-auto justify-center ssm:w-full">
          {members.map((member) =>
            member.year === 3 && member.position === "Coordinator" ? (
              <Card
                key={member.id}
                card_id={member.id}
                member_name={member.name}
                member_imgUrl={member.imageURL}
                member_tagline={member.tagline}
                member_github={member.github}
                member_linkedIn={member.linkedin}
                card_posi={"ClubCC"}
              />
            ) : null
          )}
        </div>
        <div className="year-3 flex flex-wrap w-[80%] m-auto justify-center ssm:w-full">
          {members.map((member) =>
            member.year === 3 && member.position !== "Coordinator" ? (
              <Card
                key={member.id}
                card_id={member.id}
                member_name={member.name}
                member_imgUrl={member.imageURL}
                member_tagline={member.tagline}
                member_github={member.github}
                member_linkedIn={member.linkedin}
              />
            ) : null
          )}
        </div>
      </section>
      <section id="2nd-year" className="min-h-[100vh]" ref={ref2}>
        <Yeartag scroll_id="second-year" year_name={"EXECUTIVE MEMBERS"} />
        <div className="year-2  flex flex-wrap w-[80%] m-auto justify-center ssm:w-full">
          {members.map((member) =>
            member.year === 2 ? (
              <Card
                key={member.id}
                card_id={member.id}
                member_name={member.name}
                member_imgUrl={member.imageURL}
                member_tagline={member.tagline}
                member_github={member.github}
                member_linkedIn={member.linkedin}
              />
            ) : null
          )}
        </div>
      </section>
      <section id="1st-year" className="min-h-[100vh] mb-10" ref={ref1}>
        <Yeartag scroll_id="first-year" year_name={"VOLUNTEERS"} />
        <div className="year-1 flex flex-wrap w-[80%] m-auto justify-center ssm:w-full">
          {members.map((member) =>
            member.year === 1 ? (
              <Card
                key={member.id}
                card_id={member.id}
                member_name={member.name}
                member_imgUrl={member.imageURL}
                member_tagline={member.tagline}
                member_github={member.github}
                member_linkedIn={member.linkedin}
              />
            ) : null
          )}
        </div>
      </section>
    </div>
  );
};

export default Container;
