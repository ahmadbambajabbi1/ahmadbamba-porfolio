import Button from "../custom/Button";

const HeroSection = () => {
  return (
    <div className="h-[650px] flex overflow-hidden border-b-1 border-secondaryColor relative">
      <div className="flex flex-col h-full justify-center gap-y-5 w-full pl-16 z-10">
        <div className="flex flex-col gap-y-4">
          <div className="hero-intro">
            <p className="text-lg text-secondaryColor font-bold capitalize">
              hello i am
            </p>
            <p className="text-5xl uppercase font-bold">
              ahmadbamba <span className="text-secondaryColor">alfusainey</span>
            </p>
            <p className="text-5xl uppercase font-bold">jabbi</p>
          </div>
          <p className="text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            commodi?
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-4">
            <img
              className="w-6 h-6 text-white"
              src="/icons/instagram.svg"
              alt="instagram"
            />
            <img
              className="w-6 h-6 text-white"
              src="/icons/linkedin.svg"
              alt="linkedIn"
            />
            <img
              className="w-6 h-6 text-white"
              src="/icons/facebook.svg"
              alt="facebook"
            />
            <img
              className="w-6 h-6 text-white"
              src="/icons/whatsapp.svg"
              alt="whatsApp"
            />
            <img
              className="w-6 h-6 text-white"
              src="/icons/cv.svg"
              alt="my cv"
            />
            <img
              className="w-6 h-6 text-white"
              src="/icons/cv.svg"
              alt="my cv"
            />
          </div>
        </div>
        {/* <div className="items-center">
          <div className="flex items-center gap-4">
            <img
              className="w-6 h-6 text-white"
              src="/icons/cv.svg"
              alt="my cv"
            />
          </div>
        </div> */}
        <div className="flex gap-x-3">
          <Button firstText="hire" Secondtext="me" />
          <Button firstText="Get In" Secondtext="Touch" />
        </div>
      </div>
      <div className="w-3/5 h-4/5 absolute right-0  z-0">
        <img
          className="w-full h-full object-cover object-top"
          src="/image/ahmad.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
