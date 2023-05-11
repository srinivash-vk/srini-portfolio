import { useRef } from "react";
import NavBar from "./Components/NavBar";
import IntroScreen from "./Container/IntroScreen";
import TechnologiesScreen from "./Container/TechnologiesScreen";

function App() {
  const nextContentRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    window.scrollTo({
      top: nextContentRef.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="lg:px-20 md:px-15 sm:px-8 xs:px-8 h-full flex-1 flex flex-col overflow-x-hidden bg-dark dark:bg-light text-light dark:text-dark content-center w-full">
      {/* NavBar layout */}
      <NavBar />
      {/* Intro about me */}
      <IntroScreen scrollDown={handleButtonClick}/>

      {/* Technologies Known */}
      <TechnologiesScreen scrollDownRef={nextContentRef}/>
    </div>
  );
}

export default App;
