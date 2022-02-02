import React from "react";
import { LinearProgress } from "@mui/material";

const ProgressBar = ({ progress }) => {
  return (
    <React.Fragment>
      <LinearProgress variant="determinate" value={progress} color="success" />
    </React.Fragment>
  );
};

export default ProgressBar;
