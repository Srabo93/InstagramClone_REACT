import React, { useEffect } from "react";
import useStorage from "../hooks/uploads/useStorage";
import { LinearProgress } from "@mui/material";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <React.Fragment>
      <LinearProgress variant="determinate" value={progress} color="success" />
    </React.Fragment>
  );
};

export default ProgressBar;
