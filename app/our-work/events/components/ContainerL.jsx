import React from "react";
import EventCardl from "../../components/CardL";
import StatusTag from "../../components/StatusTag";
import { prevEvents } from "../../components/constants";

const ContainerL = ({ eventsData }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* events heading  */}

      {/* Upcoming Events  */}
      <div
        id="upcoming-events"
        className="flex flex-col w-[full] h-[100px] items-center mt-[140px] mb-[50px]"
      >
        <div className="text-[#4ED4FF] text-[45px] font-bold font-aldrich sm:text-[33px] leading-0 relative">
          This Year's Events
          <p
            className="text-[#ffffff] text-[60px] absolute top-[-140px] left-[80px] z-[1000] londrina-solid-font font-[600] flex items-center gap-4"
            style={{ letterSpacing: "2px" }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 96 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.4289 67.025V31.6446H28.3926V67.025H83.4289ZM83.4289 11.9888C85.5141 11.9888 87.5139 12.8171 88.9884 14.2916C90.4628 15.7661 91.2912 17.7659 91.2912 19.8511V67.025C91.2912 69.1103 90.4628 71.1101 88.9884 72.5845C87.5139 74.059 85.5141 74.8874 83.4289 74.8874H28.3926C26.3074 74.8874 24.3076 74.059 22.8331 72.5845C21.3587 71.1101 20.5303 69.1103 20.5303 67.025V19.8511C20.5303 17.7659 21.3587 15.7661 22.8331 14.2916C24.3076 12.8171 26.3074 11.9888 28.3926 11.9888H32.3238V4.12646H40.1861V11.9888H71.6354V4.12646H79.4977V11.9888H83.4289ZM12.668 82.7497H67.7042V90.612H12.668C10.5828 90.612 8.58296 89.7836 7.10848 88.3092C5.63401 86.8347 4.80566 84.8349 4.80566 82.7497V35.5758H12.668V82.7497ZM75.5666 59.1627H59.8419V43.4381H75.5666V59.1627Z"
                fill="#BEA5FF"
              />
            </svg>
            EVENTS
          </p>
        </div>
        <div className="w-[100px] h-[3px] bg-[#4ED4FF]"></div>
      </div>

      {eventsData.map((event, index) =>
        event.type === "event" ? (
          <EventCardl
            key={index}
            isFirstCard={index === 0 ? true : false}
            event_end_time={event.end_date}
            event_start_time={event.start_date}
            event_title={event.title}
            event_image_link={event.image_url}
            event_registeration_link={event.registeration_link}
            event_description={event.description}
            event_description_link={event.description_link}
            event_card_flipped={event.isReversed}
            Leaderboard_link={event.leaderboardLink}
            event_type={event.type}
            event_year={event.year}
          />
        ) : null
      )}

      {/* 2022 - 2023 */}
      <StatusTag
        scroll_id="Past-Year-Events"
        section_status="Past Year Events"
      />
      {prevEvents.map((event, index) => (
        <EventCardl
          key={index}
          isFirstCard={index === 0 ? true : false}
          event_end_time={event.end_date}
          event_start_time={event.start_date}
          event_title={event.title}
          event_image_link={event.image_url}
          event_registeration_link={event.registeration_link}
          event_description={event.description}
          event_description_link={event.description_link}
          event_card_flipped={event.isReversed}
          event_type={event.type}
          event_year={event.year}
        />
      ))}

    </div>
  );
};

export default ContainerL;
