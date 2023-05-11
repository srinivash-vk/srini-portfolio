import Icon from "../Components/IconsComp";

interface IntroScreenProps{
    scrollDown:()=>void
}

export default function IntroScreen(props:IntroScreenProps) {
  const {scrollDown}=props
  const mediaIcons = [
    {
      icon: "LINKEDIN",
      link: "https://www.linkedin.com/in/srinivash-v-5a264214b/",
    },
    {
      icon: "MAIL",
      link: "https://github.com/srinivash-vk",
    },
    {
      icon: "GITHUB",
      link: "https://github.com/srinivash-vk",
    },
  ];
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };


  const handleButtonClick = () => scrollDown();
  return (
    <div className="flex flex-col mx-auto justify-center items-center h-[100vh] gap-y-4 w-full">
      <div className="lg:h-[18rem] lg:w-[18rem] md:h-[15rem] md:w-[15rem] sm:h-[18rem] sm:w-[18rem]  xs:h-[18rem] xs:w-[18rem] drop-shadow-2xl dark:shadow-dark rounded-full">
        <img src={require("../Assets/Images/profile-pic.png")} alt="myImage" />
      </div>
      {/* my name */}
      <div className="flex flex-row items-center md:gap-x-4 sm:gap-x-2 xs:gap-x-2">
        <div className="lg:text-6xl md:text-4xl sm:text-2xl xs:text-2xl font-medium">
          Hey! I'm
        </div>
        <div className="animate-type lg:text-6xl md:text-4xl sm:text-2xl xs:text-2xl font-medium bg-gradient-to-r from-teal-600 via-teal-300 to-cyan-500 text-transparent bg-clip-text">
          Srinivash
        </div>
      </div>
      {/* description about me */}
      <div className="md:text-lg sm:text-md xs:text-md md:leading-9 xs:leading-7 text-center font-normal">
        I'm passionate frontend developer with two years of experience in
        building responsive and user-friendly web interfaces. I specialize in
        creating intuitive user experiences and optimizing website performance
        for seamless browsing.What I love most about frontend development is the
        ability to bring ideas to life through code. As a creative
        problem-solver, I enjoy finding elegant solutions to complex design and
        technical challenges.
      </div>
      {/* social media icons */}
      <div className="flex flex-row gap-x-10 items-center">
        {mediaIcons.map((icons) => (
          <div
            onClick={() => {
              openInNewTab(icons.link);
            }}
            className="hover:bg-light hover:bg-opacity-20 p-3 cursor-pointer rounded-full">
            <Icon icon={icons.icon} size="medium" />
          </div>
        ))}
      </div>
      <button
        onClick={handleButtonClick}
        className="text-dark mt-5 dark:text-light animate-bounce px-4 py-2 items-center rounded-full bg-gray-200 dark:bg-gray-600">
        SEE MY WORK 👇
      </button>
    </div>
  );
}
