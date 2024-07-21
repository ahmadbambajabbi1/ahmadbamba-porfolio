import React from "react";
import ProjectCard from "./ProjectCard";
import SmallTitile from "../constants/SmallTitile";
import { PROJECTSINTERFACE } from "../../interface/interface";

const projects: PROJECTSINTERFACE[] = [
  {
    imgSrc: "/public/image/1.jpg",
    content:
      "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    tools: [
      {
        name: "nextjs",
      },
    ],
    link: "http.lnlmm.con",
    name: "school portal website",
    status: "completed",
  },
  {
    imgSrc: "/public/image/2.jpg",
    content:
      "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    tools: [
      {
        name: "reactjs",
      },
      {
        name: "tailwindcss",
      },
    ],
    link: "http.lnlmm.con",
    name: "school portal website",
    status: "completed",
  },
  {
    imgSrc: "/public/image/3.jpg",
    content:
      "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    tools: [
      {
        name: "nextjs",
      },
    ],
    link: "http.lnlmm.con",
    name: "school portal website",
    status: "completed",
  },
  {
    imgSrc: "/public/image/ahmad-bg.jpg",
    content:
      "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    tools: [
      {
        name: "nextjs",
      },
    ],
    link: "http.lnlmm.con",
    name: "school portal website",
    status: "completed",
  },
  {
    imgSrc: "/public/image/3.jpg",
    content:
      "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    tools: [
      {
        name: "nextjs",
      },
    ],
    link: "http.lnlmm.con",
    name: "school portal website",
    status: "completed",
  },
  {
    imgSrc: "/public/image/2.jpg",
    content:
      "thia  project was created for testing my knowledge on howto a a good website like,thia  project was created for testing my knowledge on howto a a good website like",
    tools: [
      {
        name: "nextjs",
      },
    ],
    link: "http.lnlmm.con",
    name: "school portal website",
    status: "completed",
  },
];
const ProjectSection = () => {
  return (
    <div className="mt-10 px-10">
      <SmallTitile title="projects" />
      <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
