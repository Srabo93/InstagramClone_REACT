import React from "react";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const Input = styled("input")({
    display: "none",
  });

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
    <Box sx={{ margin: 6, display: "flex", justifyContent: "center" }}>
      <form>
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={onChangeHandler}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
        <div>
          {error && <div>{error}</div>}
          {file && <div> {file.name} </div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </Box>
  );
};

export default UploadForm;
