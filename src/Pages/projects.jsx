import React from "react";
import Projectitem from "./projectitem";

import Kaspers from "../Assets/Kaspers.JPG";
import Travel from "../Assets/TravelGoals.JPG";
import Portfolio from "../Assets/MyPortfolio.JPG";

// styles
import "../Styles/projects.css";

function Projects() {
  const projectList = [
    { name: "Kaspers", image: Kaspers },
    { name: "Travel Goals", image: Travel },
    { name: "My Portfolio", image: Portfolio },
  ];
  return (
    <div className="projects">
      <h2 className="projects-title">My Personal Projects</h2>
      <div className="projectList">
        {projectList.map((project) => (
          <Projectitem name={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
