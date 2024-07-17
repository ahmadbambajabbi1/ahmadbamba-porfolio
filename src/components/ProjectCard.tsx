// src/components/Card.js

const ProjectCard = ({ imgSrc, title }: any) => {
  return (
    <div className="border-[#140b29] bg-gradient-to-tr from-[#140b29] via-slate-800 to-[#705DF2] border-[0.5px] shadow-sm shadow-white rounded-lg overflow-hidden relative z-0">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-80 object-cover object-top"
      />
      <div className=" w-full h-20  hover:h-60 bg-[#140b29] bg-opacity-90 text-white absolute bottom-0 ">
        <h3 className="poppins-light text-justify text-sm px-2">{title}</h3>
        <button className=" bg-[#302576] uppercase w-full shadow-xl  absolute bottom-0">
          get in
        </button>
      </div>
      {/* <div className="absolute top-0 w-full flex justify-between"> */}
      {/* <p className="bg-[#705DF2] absolutes top-0 left-0">not yet</p> */}
      {/* <p className="bg-[#705DF2] absolute  -rotate-90 top-0 right-0">company</p> */}
      {/* </div> */}
    </div>
  );
};

export default ProjectCard;
