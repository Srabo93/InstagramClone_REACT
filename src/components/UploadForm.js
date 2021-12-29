import React from "react";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

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
    <Box
      sx={{
        margin: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      </form>
      <Box>
        {error && <Alert severity="error">{error}</Alert>}
        {file && <Alert severity="success">{file.name}</Alert>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </Box>
    </Box>
  );
};

export default UploadForm;
