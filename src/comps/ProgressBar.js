import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import useStorage from "../hooks/FirebaseHandler/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div>
      <div className="progress-bar" style={{ width: progress + "%" }}></div>
      <FontAwesomeIcon icon={faUpload} className="uploadIcon" />
    </div>
  );
};

export default ProgressBar;
