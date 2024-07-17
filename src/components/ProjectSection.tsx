import React from "react";
import ProjectCard from "./ProjectCard";
import SmallTitile from "./SmallTitile";

const ProjectSection = () => {
  const cards = [
    {
      imgSrc: "/public/image/ahmad.png",
      title:
        "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    },
    {
      imgSrc: "/public/image/ahmad.png",
      title:
        "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    },
    {
      imgSrc: "/public/image/ahmad.png",
      title:
        "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    },
    {
      imgSrc: "/public/image/ahmad.png",
      title:
        "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    },
    {
      imgSrc: "/public/image/ahmad.png",
      title:
        "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    },
    {
      imgSrc: "/public/image/ahmad.png",
      title:
        "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-10">
      <SmallTitile title="projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <ProjectCard key={index} imgSrc={card.imgSrc} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
