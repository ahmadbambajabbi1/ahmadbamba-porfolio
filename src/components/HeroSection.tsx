const HeroSection = () => {
  return (
    <div className="h-[690px] flex overflow-hidden">
      <div className="flex flex-col h-full justify-center gap-y-3 w-full pl-10">
        <div>
          <div className="hero-intro">
            <p className="text-xs text-gray-100 space-y-4 tracking-[5px] capitalize">
              hello i am
            </p>
            <p className="text-6xl capitalize font-bold">ahmadbamba alfu...</p>
            <p className="text-6xl capitalize font-bold">jabbi</p>
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            commodi?
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-4">
            <img
              className="w-6 h-6 text-white"
              src="/public/icons/instagram.svg"
              alt="instagram"
            />
            <img
              className="w-6 h-6 text-white"
              src="/public/icons/linkedin.svg"
              alt="linkedIn"
            />
            <img
              className="w-6 h-6 text-white"
              src="/public/icons/facebook.svg"
              alt="facebook"
            />
            <img
              className="w-6 h-6 text-white"
              src="/public/icons/whatsapp.svg"
              alt="whatsApp"
            />
            <img
              className="w-6 h-6 text-white"
              src="/public/icons/cv.svg"
              alt="my cv"
            />
          </div>
        </div>
        <div className="items-center">
          <div className="flex items-center gap-4">
            <img
              className="w-6 h-6 text-white"
              src="/public/icons/cv.svg"
              alt="my cv"
            />
          </div>
        </div>
        <div className="flex gap-x-3">
          <button className="bg-[#705DF2] px-5 py-2 rounded-3xl shadow-xl w-fit">
            Hire Me
          </button>
          <button className="bg-[#705DF2] px-5 py-2 rounded-3xl shadow-xl w-fit">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full" src="/public/image/ahmad.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
