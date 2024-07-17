import SmallTitile from "./SmallTitile";

const AboutMe = () => {
  return (
    <div className="flex mt-20 h-96 overflow-hidden justify-center items-center px-10">
      <div className="w-full">
        <img
          className="w-full object-contain object-top"
          src="/public/image/ahmad.png"
          alt=""
        />
      </div>
      <div className="w-full">
        <SmallTitile title="about my prograing carear" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          amet? In quisquam optio accusantium nesciunt nisi provident inventore
          eaque consectetur ratione, asperiores fugiat? Placeat, voluptates
          saepe. Doloremque eligendi, sed optio voluptates facilis esse
          perferendis vitae eius ab consectetur laborum corrupti quo,
          praesentium odio error repudiandae? Porro possimus itaque officiis
          iure.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
