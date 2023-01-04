import React from "react";
import "../Styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import Projects from "./../Pages/projects";
import Contact from "../Pages/contact";

function Home() {
  return (
    <div className="home">
      <div className="landing-section">
        <div className="about">
          <h2>Hi, My Name Is Ahmed Rabie</h2>
          <h3>Web Designer</h3>
          <p>
            Iam a web designer & front-end developer focused on crafting clean &
            user-friendly experiences, Iam passionate about building modern
            softwares that improves the lives of those aroud me
          </p>
          <a href="#projects">
            <FontAwesomeIcon icon={faCircleChevronDown} id="Arrowicon" />
          </a>
        </div>
      </div>
      <div className="projects-section" id="projects">
        <Projects />
      </div>
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
