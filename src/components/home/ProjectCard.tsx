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

//  <div className="border-[#140b29] bg-gradient-to-tr from-[#140b29] via-slate-800 to-[#705DF2] border-[0.5px] shadow-sm shadow-white rounded-lg overflow-hidden relative z-0">
//    <img
//      src={imgSrc}
//      alt={title}
//      className="w-full h-80 object-cover object-top"
//    />
//    <div className=" w-full h-20  hover:h-60 bg-[#140b29] bg-opacity-90 text-white absolute bottom-0 ">
//      <h3 className="poppins-light text-justify text-sm px-2">{title}</h3>
//      <button className=" bg-[#302576] uppercase w-full shadow-xl  absolute bottom-0">
//        get in
//      </button>
//    </div>
//    {/* <div className="absolute top-0 w-full flex justify-between"> */}
//    {/* <p className="bg-[#705DF2] absolutes top-0 left-0">not yet</p> */}
//    {/* <p className="bg-[#705DF2] absolute  -rotate-90 top-0 right-0">company</p> */}
//    {/* </div> */}
//  </div>;
