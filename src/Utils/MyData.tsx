export const TechStackKnown = [
  "Flutter",
  "Dart",
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React Native",
  "React JS",
  "Redux JS",
  "Redux Toolkit",
  "Tailwind CSS",
  "Rest API",
  "Firebase",
  "Figma",
  "Adobe XD",
  "Version Control System",
];

export enum TechStack {
  Flutter = "Flutter",
  Dart = "Dart",
  Html = "HTML",
  Css = "CSS",
  Javascript = "Javascript",
  Typescript = "Typescript",
  ReactNative = "React Native",
  ReactJS = "React JS",
  ReduxJS = "Redux JS",
  ReduxToolkit = "Redux Toolkit",
  TailwindCSS = "Tailwind CSS",
  RestAPI = "Rest API",
  Firebase = "Firebase",
  Figma = "Figma",
  AdobeXD = "Adobe XD",
  VersionControlSystem = "Version Control System",
}

export interface LanguageKnown {
  text: TechStack[];
  level: string;
}

export const languageKnown: LanguageKnown[] = [
  {
    text: [TechStack.Flutter],
    level: "50%",
  },
  {
    text: [TechStack.Dart],
    level: "50%",
  },
  {
    text: [TechStack.Html],
    level: "80%",
  },
  {
    text: [TechStack.Css],
    level: "50%",
  },
  {
    text: [TechStack.Javascript],
    level: "65%",
  },
  {
    text: [TechStack.Typescript],
    level: "80%",
  },
  {
    text: [TechStack.ReactJS],
    level: "95%",
  },
  {
    text: [TechStack.ReactNative],
    level: "90%",
  },
  {
    text: [TechStack.ReduxToolkit],
    level: "40%",
  },
  {
    text: [TechStack.ReduxJS],
    level: "75%",
  },
  {
    text: [TechStack.TailwindCSS],
    level: "95%",
  },
  {
    text: [TechStack.RestAPI],
    level: "60%",
  },
  {
    text: [TechStack.Firebase],
    level: "45%",
  },
  {
    text: [TechStack.AdobeXD],
    level: "85%",
  },
  {
    text: [TechStack.Figma],
    level: "85%",
  },
  {
    text: [TechStack.VersionControlSystem],
    level: "85%",
  },
];

export interface Projects {
  title: string;
  description: string;
  techStack: TechStack[];
  image?: string;
  gitHubLink?:string
  visitLink?:string
}

export const projectWorks: Projects[] = [
  {
    title: "React Native Push Notification",
    description:
      "React native push notification application using firebase",
    techStack: [TechStack.ReactNative, TechStack.Firebase],
    image: "RN_PushNotification.png",
    gitHubLink:'https://github.com/srinivash-vk/RN_PushNotification',
  },
  {
    title: "Digi library UI",
    description:
      "Digi library UI developed using React and Tailwind CSS, for data dummy json data is used.",
    techStack: [TechStack.ReactJS, TechStack.TailwindCSS, TechStack.Typescript],
    image: "ebook.png",
    gitHubLink:'https://github.com/srinivash-vk/e-book',
    visitLink:'https://digi-library.vercel.app/'
    
  },
  {
    title: "SpaceX UI",
    description:
      "SpaceX UI developed using React, Redux Toolkit and Tailwind CSS, for data SpaceX API is used.",
    techStack: [TechStack.ReactJS, TechStack.TailwindCSS, TechStack.Typescript],
    image: "spaceX-1.png",
    gitHubLink:'https://github.com/srinivash-vk/spacex',
    visitLink:'https://spacex-srini.vercel.app/'
    
  },
  {
    title: "Panorbit code challenge",
    description:
    "Code challenge to develop UI using React, Redux, Redux Toolkit and Tailwind CSS for data they gave an API ",
    techStack: [
      TechStack.ReactJS,
      TechStack.ReduxJS,
      TechStack.TailwindCSS,
      TechStack.Typescript,
    ],
    image: "user-profile.png",
    gitHubLink:'https://github.com/srinivash-vk/Panorbit_User_Details',
    visitLink:'https://panorbit-user-details.vercel.app/'
  },
  {
    title: "Clubhouse UI Clone",
    description:
      "Clubhouse UI clone developed using flutter for data dummy data is used.",
    techStack: [TechStack.Flutter, TechStack.Dart],
    image: "Clubhouse.png",
    gitHubLink:'https://github.com/srinivash-vk/ClubHouse-UI-Clone'
  },
  {
    title: "Whats App UI Clone",
    description:
      "Whats App UI clone developed using flutter for data dummy data is used.",
    techStack: [TechStack.Flutter, TechStack.Dart],
    image: "WhatsApp.png",
    gitHubLink:'https://github.com/srinivash-vk/whatsapp'
  },
];
