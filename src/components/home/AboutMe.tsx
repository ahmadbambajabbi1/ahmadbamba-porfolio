import SmallTitile from "../constants/SmallTitile";

const AboutMe = () => {
  return (
    <div className="mt-10 px-10">
      <SmallTitile title="about me" />
      <div className="mt-7 flex gap-x-5  h-96 overflow-hidden justify-between items-center ">
        <div className="flex-1 w-ful h-full rounded-2xl overflow-hidden shadow-lg shadow-slate-950">
          <img
            className="w-full h-full object-cover object-top"
            src="/image/ahmad-bg.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <SmallTitile title="about my prograing carear" />
          <p className="text-secondaryColor">
            i've learn a lot during the{" "}
            <span className="bg-secctext-secondaryColor text-white p-1">
              process
            </span>
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            amet? In quisquam optio accusantium nesciunt nisi provident
            inventore eaque consectetur ratione, asperiores fugiat? Placeat,
            voluptates saepe. Doloremque eligendi, sed optio voluptates facilis
            esse perferendis vitae eius ab consectetur laborum corrupti quo,
            praesentium odio error repudiandae? Porro possimus itaque officiis
            iure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
