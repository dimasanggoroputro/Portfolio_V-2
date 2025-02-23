import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AboutButton() {
  return (
    <div className="my-5">
      <Link to="/more-about">
        <button className="bg-kuning h-12 w-52 rounded-lg hover:scale-105 transition-all duration-300 font-semibold">
          More About Me
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </Link>
    </div>
  );
}

export default AboutButton;
