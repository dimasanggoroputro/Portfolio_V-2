import React from "react";
import ProjectsText from "./ProjectsText";
import ProjectsCard from "./ProjectsCard";

const ProjectsMain = () => {
  return (
    <>
      <div
        className="bg-Putih/90 flex-col flex justify-center items-center py-10 pb-22 md:px-10 lg:px-52 px-5 "
        id="project"
      >
        <ProjectsText />
        <ProjectsCard />
      </div>
    </>
  );
};

export default ProjectsMain;
