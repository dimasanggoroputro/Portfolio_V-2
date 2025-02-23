import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AboutMoreBack = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { scrollToAbout: true } });
  };

  return (
    <div className="mb-10">
      <button
        onClick={handleBack}
        className="bg-Hiaju text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Back to About <FontAwesomeIcon icon={faHome} className="ml-2" />
      </button>
    </div>
  );
};

export default AboutMoreBack;
