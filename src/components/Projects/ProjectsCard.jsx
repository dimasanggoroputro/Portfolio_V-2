import React from "react";

const projects = [
  {
    name: "Kalkulator Sederhana",
    foto: "/img/project/1.png",
    text: "Kalkulator Sederhana yang di bangun mengguanakn HTML,CSS,JS.",
  },
  {
    name: "Perpustakan Digital",
    foto: "/img/project/2.png",
    text: "Webside peminjaman buku online yg di bangun mengguanakn PHP,MySQL,Bootstrap",
  },
  {
    name: "Portfolio",
    foto: "/img/project/3.png",
    text: "Portfolio Pertama saya yang di bangun menggunakan HTML,JS,Bootstrap",
  },
];

const ProjectsCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4 items-center ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-start rounded-lg hover:scale-105 transition-all duration-500 shadow-lg p-2"
          >
            <img
              src={project.foto}
              alt={project.name}
              className=" rounded-lg object-contain transition-all duration-500"
            />
            <h1 className=" text-xl mt-2 font-semibold ml-2 ">
              {project.name}
            </h1>
            <p className="ml-2 mt-1">{project.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsCard;
