import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Title = () => {
  return (
    <div className="title">
      <h1>
        ClonesterGram <FontAwesomeIcon icon={faPhotoVideo} />
      </h1>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Title;
