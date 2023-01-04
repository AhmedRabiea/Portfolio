import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// styles
import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <p>&copy; AhmedTech.com</p>
    </div>
  );
}

export default Footer;
