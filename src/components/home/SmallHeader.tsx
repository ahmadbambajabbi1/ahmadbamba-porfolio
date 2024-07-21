const SmallHeader = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2 bg-zinc-900">
      <p className="text-white">Ahmadbamba Alfusainey Jabbi</p>
      <div className="flex items-center gap-10">
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
  );
};

export default SmallHeader;
