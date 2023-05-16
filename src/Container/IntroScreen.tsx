import { ReactComponent as INTRO } from "../Assets/Icons/intro.svg";

interface IntroScreenProps {
  scrollDown: () => void;
}

export default function IntroScreen(props: IntroScreenProps) {
  const { scrollDown } = props;
  const handleButtonClick = () => scrollDown();
  return (
    <div className="flex flex-col mx-auto justify-center items-center h-[100vh] w-full">
      <div className="flex flex-row items-center justify-center gap-x-4">
        <div className="flex flex-col mx-auto justify-center items-center gap-y-4">
          <div className="lg:h-[18rem] lg:w-[18rem] md:h-[15rem] md:w-[15rem] sm:h-[18rem] sm:w-[18rem]  xs:h-[18rem] xs:w-[18rem] drop-shadow-2xl dark:shadow-dark rounded-full">
            <img
              loading="eager"
              src={require("../Assets/Images/profile-pic.png")}
              alt="myImage"
            />
          </div>
          {/* my name */}
          <div className="flex flex-row items-center md:gap-x-4 sm:gap-x-2 xs:gap-x-2">
            <div className="lg:text-6xl md:text-4xl sm:text-2xl xs:text-2xl font-medium">
              Hey! I'm
            </div>
            <div className="animate-type lg:text-6xl md:text-4xl sm:text-2xl xs:text-2xl font-medium bg-gradient-to-r from-purple-600 via-purple-300 to-teal-300 text-transparent bg-clip-text">
              Srinivash
            </div>
          </div>
          {/* description about me */}
          <div className="md:text-lg sm:text-md xs:text-md md:leading-9 xs:leading-7 text-justify font-normal">
            I'm passionate frontend developer with two years of experience in
            building responsive and user-friendly web interfaces. I specialize
            in creating intuitive user experiences and optimizing website
            performance for seamless browsing.What I love most about frontend
            development is the ability to bring ideas to life through code. As a
            creative problem-solver, I enjoy finding elegant solutions to
            complex design and technical challenges.
          </div>
         
        </div>
        <div>
          <INTRO />
        </div>
      </div>
      <button
            onClick={handleButtonClick}
            className="text-dark dark:text-light animate-bounce px-4 py-2 items-center rounded-full bg-gray-200 dark:bg-gray-600 mt-20"
          >
            See My Works... ❤️
          </button>
    </div>
  );
}
