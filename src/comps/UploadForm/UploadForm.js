import React from "react";
import ProgressBar from "../ProgressBar";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import classes from "./UploadForm.module.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form className={classes.upload_form}>
      <label>
        <input type="file" onChange={onChangeHandler} />
        <CloudUploadIcon />
      </label>
      <div className={classes.output}>
        {error && <div className={classes.error}>{error}</div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
