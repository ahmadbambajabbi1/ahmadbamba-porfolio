import SmallTitile from "../constants/SmallTitile";

const skills = [
  {
    first: "Liabry - Front-End",
    second: "JavaScript",
    skiil: "ReactJs",
    frameworks: [
      {
        name: "nextjs",
        years: "2 years",
      },
      {
        name: "remix",
        years: "1 years",
      },
    ],
  },
  {
    first: "Run Time - Backend",
    second: "JavaScript",
    skiil: "NodeJs",
    frameworks: [
      {
        name: "nextjs",
        years: "2 years",
      },
      {
        name: "remix",
        years: "1 years",
      },
    ],
  },
  {
    first: "Framework - Style",
    second: "CSS",
    skiil: "Tailwind",
    frameworks: [
      {
        name: "nextjs",
        years: "2 years",
      },
      {
        name: "remix",
        years: "1 years",
      },
    ],
  },
  {
    first: "Framework - Server-Side",
    second: "ReactJs",
    skiil: "NextJs",
    frameworks: [
      {
        name: "nextjs",
        years: "2 years",
      },
      {
        name: "remix",
        years: "1 years",
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="mt-10 px-10  py-10 bg-[uri('/pblic/image/ahmad-bg.jpg')]">
      <SmallTitile title="skills" />
      <div className=" mt-7 grid grid-cols-4 justify-center w-full  gap-x-4 text-white ">
        {skills.map((skill) => (
          <div className="rounded-2xl bg-primaryColor text-white p-3 flex flex-col gap-y-5 shadow-slate-950 shadow-lg  border-[2px] border-secondaryColor">
            <p className="text-xs text-gray-300">
              //////////////
              <span className="text-secondaryColor">////////////////////</span>
            </p>
            <div className=" flex flex-col gap-y-2  w-full pl-4">
              <div>
                <p className="font-bold text-gray-100 text-base">
                  {skill.first}
                </p>
                <p className="text-xl uppercase font-bold text-gray-100">
                  {skill.second}
                </p>
              </div>
              <p className="text-4xl text-secondaryColor hero-intro">
                {skill.skiil}
              </p>
              <div className="flex flex-col text-justify  w-full items-start">
                {skill.frameworks.map((framework) => (
                  <div className="flex gap-x-3 uppercase font-bold text-sm text-justify">
                    <p>{framework.name}: </p>
                    <p>{framework.years}</p>
                  </div>
                ))}
              </div>
              {/* <p className="w-full  max-h-20 text-opacity-80 text-white">
                <span className="hero-intro uppercase text-sm mr-2 text-justify !text-opacity-90">
                  Sumarry:
                </span>
                the dedicated of time given to myself help me a lot to learn
                this. it's was a little bit fun. but chalenging
              </p> */}
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="uppercase text-sm bg-secondaryColor bg-opacity-30 p-2 rounded-lg text-white font-extrabold ">
                started: july 2024
              </p>
              {/* <p className="w-full border-b-2 border-[#705DF2]"></p> */}
            </div>
            {/* <div className="flex justify-between items-center">
              <span className="flex gap-x-5">
                <span>html</span>
                <span>css</span>
                <span>js</span>
              </span>
              <span>////</span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
