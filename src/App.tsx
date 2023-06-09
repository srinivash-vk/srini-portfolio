import { useRef } from "react";
import NavBar from "./Components/NavBar";
import IntroScreen from "./Container/IntroScreen";
import TechnologiesScreen from "./Container/TechnologiesScreen";
import ProjectsScreen from "./Container/ProjectsScreen";
import ContactMeScreen from "./Container/ContactMeScreen";

function App() {
  const nextContentRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    window.scrollTo({
      top: nextContentRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="lg:px-20 md:px-15 sm:px-8 xs:px-8 h-full flex-1 flex flex-col overflow-x-hidden bg-slate-900 dark:bg-light text-light dark:text-dark content-center w-full">
      {/* NavBar layout */}
      <NavBar />
      {/* Intro about me */}
      <IntroScreen scrollDown={handleButtonClick}/>

      {/* Project done by me */}
      <ProjectsScreen scrollDownRef={nextContentRef}/>

      {/* Technologies Known */}
      <TechnologiesScreen />

      {/* Contact me */}
      <ContactMeScreen />
    </div>
  );
}

export default App;
