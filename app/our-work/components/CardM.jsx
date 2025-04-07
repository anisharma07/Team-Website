"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClampLines from "react-clamp-lines";
import LeaderboardBtn from "./LeaderboardBtn";

const EventCardm = ({
  event_title,
  event_image_link,
  event_registeration_link,
  event_start_time,
  event_end_time,
  event_description,
  event_description_link,
  event_card_flipped,
  isFirstCard,
  event_year,
  Leaderboard_link,
  event_type,
}) => {
  //initial states
  const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0]);
  const [eventStatus, setEventStatus] = useState("upcoming");
  const isWorkshop = event_type === "workshop" ? true : false;

  let interval;
  const startDate = new Date(event_start_time);
  const endDate = new Date(event_end_time);

  const day = String(endDate.getUTCDate()).padStart(2, "0");
  const month = endDate.toLocaleString("default", { month: "long" });
  const year = endDate.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const updateCountdown = () => {
    const tempCurrentDate = new Date();

    let timeDifference;
    if (tempCurrentDate > endDate) {
      setEventStatus("event-over");
      clearInterval(interval);
      return;
    }

    if (tempCurrentDate < startDate) {
      timeDifference = startDate - tempCurrentDate;
      formatTime(timeDifference);
    } else {
      setEventStatus("event-live");
      timeDifference = endDate - tempCurrentDate;
      formatTime(timeDifference);
    }
  };

  const formatTime = (duration) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    setTimeLeft([days, hours, minutes, seconds]);
  };

  useEffect(() => {
    interval = setInterval(() => {
      updateCountdown();
    }, 1000);
    AOS.init({
      duration: 500,
      easing: "slide",
      offset: 0,
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`w-full relative flex flex-col justify-center items-center py-0 ${
        isFirstCard ? "pt-0" : ""
      } `}
    >
      <div
        className={`bg-gradient-circle-mobile absolute top-[-100px] ${
          event_card_flipped ? "left-[-520px]" : "right-[-520px]"
        } ${
          eventStatus === "upcoming"
            ? "bg-gradient-purple"
            : eventStatus === "event-live"
            ? "bg-gradient-green"
            : "bg-gradient-purple"
        } card rounded-full z-[0]`}
      ></div>
      <div
        className=" w-full px-6 heading flex flex-col gap-2 items-center mt-16 mb-4"
        data-aos="fade-up"
      >
        <h1
          className={`text-purpleSecondary text-[35px] font-aldrich font-bold text-center`}
        >
          {event_title.toUpperCase()}
        </h1>
      </div>

      <div
        className={`relative w-[80%] max-w-[786px] bg-[#ffffff00] rounded-[11px] flex flex-col items-center`}
      >
        <div
          className="border-[5px] rounded-[13px] border-[#ffffff29]"
          data-aos={`flip-${event_card_flipped ? "down" : "up"}`}
        >
          <Image
            src={event_image_link}
            alt="event-poster"
            width={300}
            height={375}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsSAAALEgHS3X78AAAEa0lEQVRIibWWS2yVRRTHfzPf694+b6Gl3BbUGtH6bIshBFclwgqxRmMIGo248bFw51KNCYnRjYnoypgYdm5Z+AgQESJEIg8hgTalUlpo6e3rPnu/95i5vYU+oBvLSU7y5fvON785/5kzZ4RSiqoZQD3gVJ//r0WABxT08wLIAtYDLlACgjUA6TFrgQQwrUES2ADkgbk1ACw3DauTVWL0gCBUFYpldT3cBwRZMNe835dbp733csPGllCC9kjC473qm8Zma2QhZmba7xobM97S042FIkJQk4xOPtlhH1k+3j1BuTFvW/aq+d3oeWmUAnAl+CZMTLlbXnrf6tMxcRTLC+fVD/myfH5hMjkXLt+M3z14IOhsqrcyi8eUyyFxHIvxv9ShyBJG7WMQWPOuQf8OJvb2X3Jf1nGDg94HBdeehwi9f+HqbciGZtPhU+GXy8ddAZq46r3jF5ztoRDYG0A0gWeCa4BnII79LL/OZt2HBoasgxqwIOutHEx6UDbh2HXn7Uuj7gurSpcdpU//rAspkNDUqUjXC3IFmC3CTNF8dGjIP9fdZaRiAboKtbxHfo0JDVlZdd9AHh2K33huM6fvC0r3yM/7j6q9kSGknnFBQG0KNqfBmoQWA7ZudZqFEHf++eVKTGAoSqYiMgTKDOf2d5tL5FshXarVuZBs937SWRVjhRsLJqbATEBtI+zYIVgMyXuKP4cVjiGJLFXJ6JXO8FBbyh5dFRQGkT0yK3vKxOQDATqrMgwMwyMdilTjXYg+vk7cgFwAygbLESSdiLFJtTuMYmNVUCYTdF/P2J3XJyNCoBxAJgs3JqBto1gSO1uGGwWQlqCmTtDaBM+2C3KG0zM66z+1OHbFGrW1J84m7dLvmZvOzgBFKRLkXXi9FwzjLiiMFQO3FQ/XafkEjq43Q2DWCHan3R87mpOXV5cujKQ/K9YF0iAzpZgpQroVep5eGnd+RDGSFTTagnQjrKsHUTN/1ozZlXazxFaAzp6ZOzCZS3b5ElwliUNF3y6WbICpkuJIP4x7MOXD+hqY1vVkQtmCMyRe+yfv9q4q3cA1o8/XxSkqBVrJZmgaBmYUum5iodREvnj87+m6XVKf97n5TFJ1kHSgZMOcgzjpqVe74MR9pXtxt/Gpb8SRPnJiB5rTgmsZKj44CcWy+9ub22r31CSDK0MBnHPheAmOF0PmElQ8NKL8vgbzi1Wle2iTc7G7y/9eZ5XeqBA26F2uj5lIhO7OJ8yPbMvwP96uPizYSuUdCMyIqbBIv1ui4MD+RPjZBscaXxWkbW+v+Ul9QzDT2lJp9sRSEUhFV1vwVUuDPahjdrQn/tizyTscGT5S5pAUGJwZp4nypX319rfLx9StfGGHFBZ/yMwGz7iBSM+fZwIlFJtS4pRtGneaZNaLUheL8TZEjNBOREfSGtyccIaXceo1qAbQPnWv7NbIWmS1jZvVa9aDMH0nMRauWzqjhqp8Zd3/1gCok0hW74rZxRdInZF+aa9hVn5l8uD9B85G64/q9Yp4AAAAAElFTkSuQmCC"
            priority
            className="w-[300px] h-auto rounded-[9px] cursor-pointer"
          ></Image>
        </div>
        {!isWorkshop && (
          <a
            href={event_registeration_link}
            className={`text-lg font-spaceMono font-bold my-[12px] border-2 ${
              eventStatus === "event-over"
                ? "border-eventRed text-eventRed hover:text-black hover:bg-eventRed cursor-not-allowed"
                : eventStatus === "event-live"
                ? "border-eventGreen text- text-eventGreen hover:text-black hover:bg-eventGreen"
                : "border-purpleSecondary text- text-purpleSecondary hover:text-black hover:bg-purpleSecondary"
            }  p-2 px-16 cursor-pointer transition-all duration-500 ease-in-out rounded-[11px]`}
          >
            {eventStatus === "event-over"
              ? "EVENT OVER"
              : eventStatus === "event-live"
              ? "EVENT LIVE"
              : "REGISTER NOW"}
          </a>
        )}
        <div
          data-aos={`fade-up`}
          className="text-[#f3f3f3] custom-scrollbar-really-unique font-poppins my-[12px] text-justify leading-[28px] text-[18px] font-[300]"
        >
          <ClampLines
            text={event_description}
            id="really-unique-id"
            lines={5}
            ellipsis="..."
            buttons={true}
            innerElement="p"
          />
        </div>
        <div className=" mt-[20px] flex items-center gap-2">
          <a
            href={event_description_link ? event_description_link : null}
            className={`${
              event_description_link
                ? "bg-[#4ED4FF] text-black hover:bg-[#2688a6]"
                : " bg-[#0c2831] text-[#2688a6] cursor-not-allowed border-2 border-[#19566b]"
            } ${
              isWorkshop ? "hidden" : ""
            } px-4 py-2 transition duration-300 font-poppins font-[400] rounded-[7px] text-l`}
          >
            DESCRIPTION
          </a>
          {Leaderboard_link ? (
            <LeaderboardBtn leaderLink={Leaderboard_link} />
          ) : null}
        </div>

        <div className="flex flex-row justify-center w-full my-[12px] gap-3">
          <p className=" text-[21px] mt-1 font-aldrich text-purpleSecondary">
            {eventStatus === "upcoming"
              ? "STARTS IN"
              : eventStatus === "event-live"
              ? "ENDS IN"
              : isWorkshop
              ? "Conducted on"
              : "Ended on"}
          </p>
          <div
            className={`relative flex ${
              eventStatus === "upcoming"
                ? "text-blueSecondary"
                : eventStatus === "event-live"
                ? "text-[#FF2B2B]"
                : "hidden"
            } text-[21px] font-digitalNumbers`}
          >
            <div className="absolute top-10 left-0 flex gap-4 text-white text-[13px]">
              <p>{timeLeft[0] > 1 ? "Days" : "Hrs"}</p>
              <p>{timeLeft[0] > 1 ? "Hrs" : "Min"}</p>
              <p>{timeLeft[0] > 1 ? "Min" : "Sec"}</p>
            </div>
            <p className="days">
              {timeLeft[0] > 1
                ? String(timeLeft[0]).padStart(2, "0")
                : String(timeLeft[1]).padStart(2, "0")}
            </p>
            <p className="colons">:</p>
            <p className="hrs">
              {timeLeft[0] > 1
                ? String(timeLeft[1]).padStart(2, "0")
                : String(timeLeft[2]).padStart(2, "0")}
            </p>
            <p className="colons">:</p>
            <p className="mr-2">
              {timeLeft[0] > 1
                ? String(timeLeft[2]).padStart(2, "0")
                : String(timeLeft[3]).padStart(2, "0")}
            </p>
            <p
              className={`${
                timeLeft[0] > 1 ? "" : "hidden"
              } text-purpleSecondary text-[12px] m-auto`}
            >
              {String(timeLeft[3]).padStart(2, "0")}
              <strong className="text-[7px]">s</strong>
            </p>
          </div>
          <div
            className={`${
              eventStatus === "event-over" ? "text-[#FF2B2B]" : "hidden"
            } text-[21px] mt-1 font-aldrich text-blueSecondary`}
          >
            {formattedDate}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCardm;
