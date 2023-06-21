import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { ReactComponent as RIGHTARROW } from "../Assets/Icons/right-arrow.svg";
import Icon from "../Components/IconsComp";
import useWindowDimensions from "../Utils/useDimension";


export default function ContactMeScreen() {
    const {windowDimensions}=useWindowDimensions()
  const mediaIcons = [
    {
      icon: "LINKEDIN",
      link: "https://www.linkedin.com/in/srinivash-v-5a264214b/",
    },
    // {
    //   icon: "MAIL",
    //   link: "https://github.com/srinivash-vk",
    // },
    {
      icon: "GITHUB",
      link: "https://github.com/srinivash-vk",
    },
  ];
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="flex-1 flex md:flex-row flex-col mx-auto justify-around items-center overflow-hidden mt-20 mb-10 w-full md:w-4/5">
        <div className="sm:text-3xl xs:text-lg font-medium bg-gradient-to-r from-teal-600 via-teal-300 to-cyan-500 text-transparent bg-clip-text">Feel free to contact me</div>
       {windowDimensions.width>=768&& <RIGHTARROW className="h-5 w-16 animate-ping" stroke="#06b6d4" fill="#06b6d4"/>}
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
    </div>
  );
}
