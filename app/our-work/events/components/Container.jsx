import React from "react";
import ContainerM from "./ContainerM";
import ContainerL from "./ContainerL";

const Container = ({ eventsData, isMobile }) => {
  return (
    <div className="overflow-hidden">
      {isMobile ? (
        <ContainerM eventsData={eventsData} />
      ) : (
        <ContainerL eventsData={eventsData} />
      )}
    </div>
  );
};

export default Container;
