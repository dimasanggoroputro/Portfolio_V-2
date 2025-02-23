import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faBootstrap,
  faPhp,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "PHP", icon: faPhp },
  { name: "Figma", icon: faFigma },
];

function AboutSkils() {
  return (
    <>
      <h1 className="mt-5 text-Hiaju font-bold text-3xl drop-shadow mb-2">
        My<span className="text-kuning">Skils</span>
      </h1>
      <p className="mb-5 text-center">
        With this ability, I can help create effective and innovative
        collaborations.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-Hiaju h-24 w-36 flex flex-col items-center justify-center rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-Putih text-3xl"
            />
            <h1 className="text-Putih text-lg mt-2 font-semibold">
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutSkils;
