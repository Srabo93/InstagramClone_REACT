import React from "react";
import classes from "./Title.module.css";
import CameraIcon from "@mui/icons-material/Camera";
import { Typography } from "@mui/material";

const Title = () => {
  return (
    <div className={classes.title}>
      <Typography variant="h3" color="primary">
        PhotoGallery <CameraIcon color="primary" fontSize="large" />
      </Typography>

      <h2>Your Pictures</h2>
      <p>Share your Pictures with the World.</p>
    </div>
  );
};

export default Title;
