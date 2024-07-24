// src/components/Card.js

import { Link } from "@nextui-org/react";
import { PROJECTSINTERFACE } from "../../interface/interface";

const ProjectCard = ({ project }: { project: PROJECTSINTERFACE }) => {
  return (
    <div className=" overflow-hidden rounded-2xl shadow-lg shadow-slate-950">
      <div className="w-full h-80 overflow-hidden">
        <img
          src={project.imgSrc}
          alt={project.name}
          className="w-full h-full overflow-hidden object-cover object-top hover:scale-110 hover:-rotate-6 hover:animate-fade-in-top saturate-200"
        />
      </div>
      <div className="py-5 px-8">
        <ul className="flex">
          <li className=" font-extrabold uppercase">{project.name}</li>
        </ul>
        <div className="flex capitalize">
          <p>
            <span className="font-extrabold uppercase">status</span>:{" "}
            <span className="text-secondaryColor font-bold capitalize">
              {project.status}
            </span>
          </p>
        </div>
        <div className="mt-3">
          <ul className="flex items-center gap-x-5 uppercase font-bold text-sm ">
            {project.tools.map((tool) => (
              <li className="list-disc">{tool.name}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          <p className="text-justify">{project.content}</p>
        </div>
      </div>
      <Link className="text-center w-full block text-lg hover:animate-bounce cursor-pointer">
        view
      </Link>
    </div>
  );
};

export default ProjectCard;
