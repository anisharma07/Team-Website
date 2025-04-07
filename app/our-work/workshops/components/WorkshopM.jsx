import React from "react";
import StatusTag from "@app/our-work/components/StatusTag";
import EventCardm from "@app/our-work/components/CardM";
import { prevWorkshops } from "../../components/constants";

const WorkshopM = ({ eventsData }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="text-[#ffffff] text-[40px] sssm:text-[34px] londrina-solid-font font-[600] flex items-center gap-2 mt-[10px] mb-[50px]"
        style={{ letterSpacing: "2px" }}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 107 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M84.8047 31.1807C84.8047 31.1807 62.3047 62.6807 28.5547 62.6807M28.5547 62.6807C19.5547 62.6807 3.80469 67.1807 3.80469 85.1807V103.181H53.3047V85.1807C53.3047 73.9307 66.8047 80.6807 84.8047 49.1807L78.0547 42.4307M28.5547 62.6807C32.7318 62.6807 36.7379 61.0213 39.6916 58.0676C42.6453 55.1139 44.3047 51.1078 44.3047 46.9307C44.3047 42.7535 42.6453 38.7474 39.6916 35.7937C36.7379 32.84 32.7318 31.1807 28.5547 31.1807C24.3775 31.1807 20.3715 32.84 17.4178 35.7937C14.4641 38.7474 12.8047 42.7535 12.8047 46.9307C12.8047 51.1078 14.4641 55.1139 17.4178 58.0676C20.3715 61.0213 24.3775 62.6807 28.5547 62.6807ZM12.8047 22.1807V8.68066H102.805V71.6807H89.3047M48.8047 4.18066H66.8047V13.1807H48.8047V4.18066Z"
            stroke="#BEA5FF"
            strokeWidth="7"
          />
        </svg>
        WORKSHOPS
      </div>
      <StatusTag scroll_id="This Year Workshops" section_status="2023 - 2024" />
      {eventsData.map((event, index) =>
        event.type === "workshop" ? (
          <EventCardm
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
            isSuperFirst={index === 0 ? true : false}
            event_type={event.type}
          />
        ) : null
      )}
      <br />
      <br />
      <br />
      <StatusTag scroll_id="Prev Year Workshops" section_status="2022 - 2023" />
      {prevWorkshops.map((event, index) => (
        <EventCardm
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
        />
      ))}
      <br />
      <br />
      <br />
    </div>
  );
};

export default WorkshopM;
