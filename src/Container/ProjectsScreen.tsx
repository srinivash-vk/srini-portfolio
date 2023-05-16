import Chips from "../Components/Chips";
import ScreenHeader from "../Components/ScreenHeader";
import { Projects, projectWorks } from "../Utils/MyData";

interface ProjectsScreenProps {
  scrollDownRef: React.RefObject<HTMLDivElement>;
}

export default function ProjectsScreen(props: ProjectsScreenProps) {
  const { scrollDownRef } = props;

  return (
    <div
      ref={scrollDownRef}
      className="flex flex-col mx-auto items-center justify-center h-full gap-y-4 mt-4"
    >
    <ScreenHeader headerText="Projects"/>
      <div className="flex flex-col items-center justify-center gap-x-4 gap-y-4">
        {projectWorks.map((projectData: Projects, index) => (
          <div key={index}>
            <div className="py-3 px-3 flex md:flex-row flex-col gap-y-4 gap-x-4 bg-light dark:bg-gray-200 lg:w-[80rem] md:w-[50rem] rounded-lg">
              <div className="lg:w-[40rem] md:w-[30rem] sm:w-[20rem] w-full ">
                <img
                  loading="eager"
                  className="w-full rounded-md "
                  src={require(`../Assets/Images/${projectData.image}`)}
                  alt="Project_Image"
                />
              </div>
              <div className="flex flex-col justify-start md:justify-center items-start gap-y-4 text-dark ">
                <div className="font-semibold text-3xl">
                  {projectData.title}
                </div>
                <div className="font-normal text-md">
                  {projectData.description}
                </div>
                <div>
                  <Chips chipText={projectData.techStack} />
                </div>
                <div className="flex md:flex-row xs:flex-col items-start md:items-center gap-x-4">
                  {projectData.gitHubLink && (
                    <a href={projectData.gitHubLink} target="_blank" rel="noopener noreferrer">
                      <button className="text-dark mt-5 dark:text-light px-4 py-2 items-center rounded-full bg-gray-200 dark:bg-gray-600">
                        Check On Github 👈
                      </button>
                    </a>
                  )}
                  {projectData?.visitLink && (
                    <a href={projectData.visitLink} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-3 text-dark mt-5 dark:text-light px-4 py-2 items-center rounded-full bg-gray-200 dark:bg-gray-600">
                      <button className="">
                        Live Preview  
                      </button>
                        <div className="h-3 w-3 bg-red-600 rounded-full animate-pulse"></div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
