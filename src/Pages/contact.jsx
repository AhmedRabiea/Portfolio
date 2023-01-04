import React from "react";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/contact.css";
import Footer from "./../Components/footer";

function Contact() {
  return (
    <div className="contact-container">
      <div className="main-heading">
        <h2>Let Us Talk </h2>
        <p>I Would Love To Hear From You</p>
      </div>
      <div className="contact-content">
        <div className="contact-box row">
          <FontAwesomeIcon icon={faMobile} className="icon" />
          <div className="text">
            <p>+201001791697</p>
          </div>
        </div>
        <div className="contact-box row">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <div className="text">
            <p>a.rabie.eissa@gmail.com</p>
          </div>
        </div>
      </div>
      <button className="btn btn-warning">Download Resume</button>
      <Footer />
    </div>
  );
}

export default Contact;
