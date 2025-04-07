import React from "react";
import projects from "./projects";
import Card from "./Card";

const SwiperCards = ({ domainActive }) => {
  return (
    <div className="w-full flex flex-col mb-12">
      {projects
        .filter((project) => project.projectDomain === domainActive)
        .map((project, index) => (
          <Card
            key={index}
            index={index + 1} // This index is now consistent with the filtered list
            title={project.title}
            description={project.description}
            tech_stack={project.techStack}
            explore_link={project.exploreLink}
            img_link={project.thumbnailUrl}
          />
        ))}
    </div>
  );
};
export default SwiperCards;
