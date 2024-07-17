import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
// import SmallHeader from "./components/SmallHeader";

const App = () => {
  return (
    <div className=" pb-10">
      {/* <SmallHeader /> */}
      <div className="bg-gradient-to-tr from-[#140b29] via-slate-800 to-[#705DF2] text-white">
        <Header />
        <HeroSection />
      </div>
      <ProjectSection />
      <AboutMe />
    </div>
  );
};

export default App;
