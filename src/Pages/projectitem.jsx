import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

function Projectitem(props) {
  return (
    <div className="item">
      <div className="card">
        <img src={props.image} className="card-img-top img-thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex mb-2">
            <a href="#" className="btn btn-outline-dark me-auto p-2">
              Code
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="btn btn-outline-dark">
              View
              <FontAwesomeIcon icon={faEye} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectitem;
