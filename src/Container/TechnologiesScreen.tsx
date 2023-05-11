interface TechnologiesScreenProps{
    scrollDownRef:React.RefObject<HTMLDivElement>
}

export default function TechnologiesScreen(props:TechnologiesScreenProps) {
  const {scrollDownRef}=props
  const languageKnown = [
    {
      text: "Flutter",
      known: "50%",
    },
    {
      text: "Dart",
      known: "50%",
    },
    {
      text: "HTML",
      known: "80%",
    },
    {
      text: "CSS",
      known: "50%",
    },
    {
      text: "Javascript",
      known: "65%",
    },
    {
      text: "Typescript",
      known: "80%",
    },
    {
      text: "React JS",
      known: "95%",
    },
    {
      text: "React Native",
      known: "90%",
    },
    {
      text: "Redux Toolkit",
      known: "40%",
    },
    {
      text: "Redux",
      known: "75%",
    },
    {
      text: "Tailwind CSS",
      known: "95%",
    },
    {
      text: "Rest API",
      known: "60%",
    },
    {
      text: "Firebase",
      known: "45%",
    },
    {
      text: "Adobe XD",
      known: "85%",
    },
    {
      text: "Figma",
      known: "85%",
    },
    {
      text: "Version Control System",
      known: "85%",
    },
  ];
  return (
    <div ref={scrollDownRef} className="h-[100vh] overflow-hidden mt-4 w-full">
      <div className="flex flex-row justify-center items-center mx-auto mb-6 gap-x-4">
        <div className="text-4xl xs:text-2xl font-medium mb-3">
          Technologies Known
        </div>
        <div className="animate-bounce text-4xl">👇</div>
      </div>
      <div className=" grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-4 md:gap-y-4 sm:gap-x-2 sm:gap-y-2">
        {languageKnown.map((languageKnown: any, index: number) => (
          <>
            <div
              key={index}
              className="relative mx-auto items-center md:w-[30rem] sm:w-full xs:w-full pt-1"
            >
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-4 uppercase rounded-full bg-light dark:bg-dark text-dark dark:text-light">
                    {languageKnown.text}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block bg-dark dark:bg-light text-light dark:text-dark">
                    {languageKnown.known}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-light dark:bg-gray-300">
                <div
                  style={{ width: languageKnown.known }}
                  className="shadow-none rounded-full animate-loadingBar flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-teal-600 via-teal-300 to-cyan-500"
                ></div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
