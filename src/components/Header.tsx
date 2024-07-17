const Header = () => {
  return (
    <div className="fixed z-50 w-full flex items-center justify-between px-7  py-3 bg-[#140b29]">
      <ul className="flex gap-10 text-gray-400 capitalize">
        <li>icon</li>
        <li>home</li>
        <li>abount</li>
        <li>projects</li>
        <li>cv view</li>
      </ul>
      <div>
        <button className="bg-[#705DF2] px-5 py-1 rounded-3xl shadow-xl">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Header;
