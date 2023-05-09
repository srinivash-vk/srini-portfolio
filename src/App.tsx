import Chip from "./Components/Chip";
import Icon from "./Components/IconsComp";
import NavBar from "./Components/NavBar";

function App() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
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

  const chipText=[
    {
      text:'Flutter'
    },
    {
      text:'Dart'
    },
    {
      text:'HTML'
    },
    {
      text:'CSS'
    },
    {
      text:'Javascript'
    },
    {
      text:'Typescript'
    },
    {
      text:'React JS'
    },
    {
      text:'React Native'
    },
    {
      text:'REACT Toolkit'
    },
    {
      text:'Redux'
    },
    {
      text:'Tailwind CSS'
    },
    {
      text:'Rest API'
    },
    {
      text:'Firebase'
    },
    {
      text:'Adobe XD'
    },
    {
      text:'Figma'
    },
  ]

  return (
    <div className="lg:px-20 md:px-15 xs:px-8 h-full flex flex-col bg-dark dark:bg-light text-light dark:text-dark content-center w-full">
      <NavBar />
      <div className="snap-y">
        <div className="snap-center flex flex-col lg:h[100vh] flex-1 md:gap-y-5 xs:gap-y-4 mx-auto w-full items-center justify-center">
          {/* my image */}
          <div className="lg:h-[18rem] lg:w-[18rem] md:h-[15rem] md:w-[15rem] xs:h-[10rem] xs:w-[10rem] drop-shadow-2xl dark:shadow-dark rounded-full">
            <img src={require("../src/Assets/Images/profile-pic.png")} alt="myImage"/>
          </div>
          {/* my name */}
          <div className="flex flex-row items-center md:gap-x-4 xs:gap-x-2">
            <div className="lg:text-6xl md:text-4xl xs:text-2xl font-medium">
              Hey! I'm
            </div>
            <div className="animate-type lg:text-6xl md:text-4xl xs:text-2xl font-medium bg-gradient-to-r from-teal-600 via-teal-300 to-cyan-500 text-transparent bg-clip-text">
              Srinivash
            </div>
          </div>
          {/* description about me */}
          <div className="md:text-lg xs:text-md md:leading-9 xs:leading-7 text-center lg:font-thin xs:font-normal">
            I’m a front-end developer from Erode. My coding journey began early
            two year when I started learning to code with youtube and building
            projects. I’m
            eager for an opportunity to kickstart my front-end career while
            making a positive contribution to the world of tech.
          </div>
          <div className="flex flex-row items-center flex-wrap justify-center gap-y-6 gap-x-6">
          {
            chipText.map((chipText,index)=>(
              
              <Chip key={index} chipText={chipText.text}/>
              ))}
            </div>
          {/* socail media icons */}
          <div className="flex flex-row gap-x-10 items-center">
            {mediaIcons.map((icons) => (
              <div
                onClick={() => {
                  openInNewTab(icons.link);
                }}
                className="hover:bg-light hover:bg-opacity-20 p-3 cursor-pointer rounded-full"
              >
                <Icon icon={icons.icon} size="medium" />
              </div>
            ))}
          </div>
          <button className="text-light dark:text-dark animate-bounce px-4 py-2 rounded-full bg-gray-300 hover:bg-opacity-20">
            SEE MY WORK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
