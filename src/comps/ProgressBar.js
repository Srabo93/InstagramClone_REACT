import React, { useEffect } from "react";
import classes from "./ProgressBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
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
      <div
        className={classes.progress_bar}
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></div>
      <FontAwesomeIcon icon={faUpload} className={classes.uploadIcon} />
    </React.Fragment>
  );
};

export default ProgressBar;
