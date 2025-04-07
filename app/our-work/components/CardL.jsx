"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LeaderboardBtn from "./LeaderboardBtn";
import ClampLines from "react-clamp-lines";

const EventCardl = ({
  event_title,
  event_image_link,
  event_registeration_link,
  event_start_time,
  event_end_time,
  event_description,
  event_description_link,
  event_card_flipped,
  isFirstCard,
  Leaderboard_link,
  event_year,
  event_type,
}) => {
  //initial states
  const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0]);
  const [eventStatus, setEventStatus] = useState("upcoming");
  const [isImageClicked, setImageClicked] = useState(false);
  const isWorkshop = event_type === "workshop" ? true : false;

  let interval;
  const startDate = new Date(event_start_time);
  const endDate = new Date(event_end_time);

  const day = String(endDate.getUTCDate()).padStart(2, "0");
  const month = endDate.toLocaleString("default", { month: "long" });
  const year = endDate.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  // updateTimer
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

  // setState
  const formatTime = (duration) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    setTimeLeft([days, hours, minutes, seconds]);
  };

  // add interval
  useEffect(() => {
    interval = setInterval(() => {
      updateCountdown();
    }, 1000);
    AOS.init({
      duration: 500,
      easing: "slide",
    });
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isImageClicked]);
  return (
    <section
      className={`w-full relative flex flex-row justify-center items-center py-0  ${
        isFirstCard ? "pt-0" : ""
      } max-w-[1440px] h-[450px] mb-[150px]`}
    >
      <div
        className={`bg-gradient-circle absolute top-[-200px] ${
          event_card_flipped ? "left-[-220px]" : "right-[-220px]"
        } ${
          eventStatus === "upcoming"
            ? "bg-gradient-purple"
            : eventStatus === "event-live"
            ? "bg-gradient-green"
            : "bg-gradient-purple"
        } rounded-full z-[1]`}
      ></div>
      <div
        className={`flex ${
          event_card_flipped ? "flex-row-reverse" : "flex-row"
        } w-[80%] justify-between  h-full  ${
          isImageClicked ? null : "absolute top-0 left-0 right-0 z-[10]"
        } mx-auto`}
      >
        <div
          className={`w-full h-full heading flex flex-col gap-2 ${
            event_card_flipped ? "items-end" : "items-start"
          } justify-center`}
          data-aos="fade-up"
        >
          <h1
            className={`text-purpleSecondary text-[45px] md:text-[40px] font-poppins font-bold text-${
              event_card_flipped ? "right" : "left"
            }`}
          >
            {event_title.toUpperCase()}
          </h1>

          <div
            data-aos={`fade-up`}
            className={`text-[#E1D6FF] w-[80%] font-poppins ${
              event_card_flipped ? "text-right" : "text-left"
            } leading-[28px] text-[18px] font-[300] h-[200px] custom-scrollbar-really-unique overflow-auto px-2`}
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
          <div
            className={`flex gap-2 ${
              event_card_flipped ? "flex-row-reverse" : null
            } items-center`}
          >
            <a
              href={event_description_link ? event_description_link : null}
              className={`${
                event_description_link
                  ? "bg-[#4ED4FF] text-black hover:bg-[#2688a6]"
                  : " bg-[#0c2831] text-[#2688a6] cursor-not-allowed border-2 border-[#19566b]"
              } ${
                isWorkshop ? "hidden" : ""
              } px-4 py-2 transition duration-300 font-poppins font-[400] rounded-[7px] text-l mt-[20px]`}
            >
              DESCRIPTION
            </a>
            {Leaderboard_link ? (
              <LeaderboardBtn leaderLink={Leaderboard_link} />
            ) : null}
          </div>

          <div
            className={`flex flex-row justify-${
              event_card_flipped ? "right" : "left"
            } my-[12px] gap-6 mt-[30px]`}
          >
            <p
              className={`${
                event_card_flipped ? "md:text-right" : "md:text-left"
              } text-[28px] mt-1 font-aldrich text-purpleSecondary md:text-[25px]`}
            >
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
              } text-[28px] font-digitalNumbers`}
            >
              <div className="absolute top-10 left-0 flex text-white text-[16px]">
                <p className="mr-5">{timeLeft[0] > 1 ? "Days" : "Hrs"}</p>
                <p className="mr-6">{timeLeft[0] > 1 ? "Hrs" : "Min"}</p>
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
              <p className="min mr-2">
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
              } text-[28px] ${
                event_card_flipped ? "md:text-right" : "md:text-left"
              } md:text-[25px] mt-1 font-aldrich text-blueSecondary`}
            >
              {formattedDate}
            </div>
          </div>
          {/* <div className="heading-borders w-full h-[1px] bg-[#ffffff45]"></div> */}
        </div>

        <div
          className={`relative w-[400px] h-full rounded-[11px] flex flex-col items-center justify-center `}
        >
          <div
            className={`${
              isImageClicked
                ? "fixed top-0 left-0 flex h-screen w-screen items-center z-[100000000000] justify-center bg-poster-overlay cursor-pointer"
                : ""
            }`}
            onClick={() => setImageClicked(!isImageClicked)}
          >
            {isImageClicked && (
              <div className="absolute top-8 right-8">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 296 296"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_1643_91)">
                    <path
                      d="M292 33.49L258.51 0L148 110.51L37.49 0L4 33.49L114.51 144L4 254.51L37.49 288L148 177.49L258.51 288L292 254.51L181.49 144L292 33.49Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_1643_91"
                      x="0"
                      y="0"
                      width="296"
                      height="296"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1643_91"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_1643_91"
                        result="effect2_dropShadow_1643_91"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_1643_91"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            )}
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
                className={` ${
                  isImageClicked ? "w-auto h-[90vh]" : "w-[300px] h-auto"
                } rounded-[9px] cursor-pointer `}
              ></Image>
            </div>
          </div>
          <a
            href={event_registeration_link}
            className={`special_for_paradox text-lg font-spaceMono font-[600] my-[12px] border-2  ${
              eventStatus === "event-over"
                ? "border-eventRed text-eventRed hover:text-black hover:bg-eventRed cursor-not-allowed"
                : eventStatus === "event-live"
                ? "border-eventGreen text- text-eventGreen hover:text-black hover:bg-eventGreen"
                : "border-purpleSecondary text- text-purpleSecondary hover:text-black hover:bg-purpleSecondary"
            } ${
              isWorkshop ? "hidden" : ""
            }  p-2 px-12 md:px-8 transition-all duration-300 ease-in-out rounded-[11px] text-center`}
          >
            {eventStatus === "event-over"
              ? "EVENT OVER"
              : eventStatus === "event-live"
              ? "EVENT LIVE"
              : event_title.includes("2K24") && event_year === 2024
              ? ""
              : "REGISTER NOW"}
            {event_title.includes("PARADOX") && event_year === 2024 && (
              <p className="text-[15px] font-[400] flex gap-4 items-center">
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 39 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.878906 3.45609V41.0479C0.879142 41.1294 0.901943 41.2091 0.94445 41.2769C0.986957 41.3447 1.04728 41.3976 1.11785 41.4289C1.18842 41.4603 1.2661 41.4687 1.34114 41.4532C1.41619 41.4376 1.48526 41.3988 1.5397 41.3415L19.8868 22.2529L1.5397 3.16243C1.48526 3.10517 1.41619 3.06633 1.34114 3.05079C1.2661 3.03524 1.18842 3.04367 1.11785 3.07503C1.04728 3.1064 0.986957 3.15929 0.94445 3.22708C0.901943 3.29486 0.879142 3.37453 0.878906 3.45609ZM27.5796 14.4094L4.57468 0.887797L4.56033 0.879188C4.16404 0.64962 3.78747 1.22163 4.11204 1.5545L22.1453 19.9506L27.5796 14.4094ZM4.11383 42.9514C3.78747 43.2842 4.16404 43.8562 4.56213 43.6267L4.57647 43.6181L27.5796 30.0965L22.1453 24.5534L4.11383 42.9514ZM36.8665 19.8616L30.4424 16.0871L24.402 22.2529L30.4424 28.4159L36.8665 24.6443C38.614 23.6141 38.614 20.8918 36.8665 19.8616Z"
                    fill="#BEA5FF"
                    className="path-fill-playstore"
                  />
                </svg>
                DOWNLOAD THE APP
              </p>
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventCardl;
