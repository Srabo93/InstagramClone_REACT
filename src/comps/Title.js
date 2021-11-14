import React from "react";
import classes from "./Title.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className={classes.title}>
      <h1>
        ClonesterGram <FontAwesomeIcon icon={faPhotoVideo} />
      </h1>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Title;
