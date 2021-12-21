import React, { useEffect } from "react";
import classes from "./ProgressBar.module.css";

import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <React.Fragment>
      <div className={classes.progress_bar}></div>
    </React.Fragment>
  );
};

export default ProgressBar;
