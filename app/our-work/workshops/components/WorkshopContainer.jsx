import React from "react";
import WorkshopL from "./WorkshopL";
import WorkshopM from "./WorkshopM";

const WorkshopContainer = ({ eventsData, isMobile }) => {
  return (
    <div className="overflow-hidden ">
      {isMobile ? (
        <WorkshopM eventsData={eventsData} />
      ) : (
        <WorkshopL eventsData={eventsData} />
      )}
    </div>
  );
};

export default WorkshopContainer;
