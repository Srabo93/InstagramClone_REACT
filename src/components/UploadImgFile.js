import React from "react";
import { useState, useEffect } from "react";
import useUploadStorage from "../hooks/uploads/useUploadStorage";
import useUploadFirestore from "../hooks/uploads/useUploadFirestore";
import ProgressBar from "./ProgressBar";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const UploadImgFile = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { progress, url } = useUploadStorage(file);
  useUploadFirestore(url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  const Input = styled("input")({
    display: "none",
  });

  const types = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    e.preventDefault();
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
        margin: 2,
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
      <Box sx={{ maxWidt: "lg" }}>
        {error && (
          <Alert sx={{ m: 1 }} variant="outlined" severity="error">
            {error}
          </Alert>
        )}
        {file && (
          <Alert sx={{ m: 1 }} variant="outlined" severity="success">
            {file.name} is Uploading...
          </Alert>
        )}
        {file && <ProgressBar progress={progress} />}
      </Box>
    </Box>
  );
};

export default UploadImgFile;
