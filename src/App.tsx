import AboutMe from "./components/home/AboutMe";
import Header from "./components/home/Header";
import HeroSection from "./components/home/HeroSection";
import ProjectSection from "./components/home/ProjectSection";
import Tabss from "./components/home/ProjectsSections";
import SkillsSection from "./components/home/SkillsSection";
import { NextUIProvider } from "@nextui-org/react";
// import SmallHeader from "./components/SmallHeader";

const App = () => {
  return (
    <NextUIProvider className=" container bg-gradient-to-tr from-primaryColor via-slate-800 to-secondaryColor text-white">
      <div className="  pb-10">
        {/* <SmallHeader /> */}
        <div className="text-white">
          <Header />
          <HeroSection />
        </div>
        <div className="">
          <AboutMe />
          <SkillsSection />
          <ProjectSection />
          {/* <Tabss /> */}
        </div>
      </div>
    </NextUIProvider>
  );
};

export default App;
