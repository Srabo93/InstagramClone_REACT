import React from "react";
import classes from "./Title.module.css";
import CameraIcon from "@mui/icons-material/Camera";

const Title = () => {
  return (
    <div className={classes.title}>
      <h1>
        PhotoGallery <CameraIcon fontSize="large" />
      </h1>

      <h2>Your Pictures</h2>
      <p>Share your Pictures with the World.</p>
    </div>
  );
};

export default Title;
