// import React from "react";
import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import AboutMe from "../components/home/AboutMe";
import SkillsSection from "../components/home/SkillsSection";
import ProjectSection from "../components/home/ProjectSection";

const Home = () => {
  return (
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
      </div>
    </div>
  );
};

export default Home;
