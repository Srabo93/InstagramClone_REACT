import React from "react";
import { useState } from "react";
import useUploadFirestore from "../hooks/uploads/useUploadFirestore";
import useUploadStorage from "../hooks/uploads/useUploadStorage";
import ProgressBar from "../components/ProgressBar";
import ContainerWrapper from "../UI/ContainerWrapper";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const DetailedUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const { url, progress } = useUploadStorage(file, title);
  useUploadFirestore(url, true, title, description);

  const Input = styled("input")({
    display: "none",
  });
  const types = ["image/png", "image/jpeg"];

  const titleHandler = (e) => {
    e.preventDefault();
    setError("");
    if (e.target.value === "") {
      setError("Please enter a Title");
    }
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    e.preventDefault();
    setError("");
    if (e.target.value === "") {
      setError("Please add a Description");
    }
    setDescription(e.target.value);
  };

  const fileHandler = (e) => {
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

  const submitHandler = () => {
    if (error === "" && title !== "" && description !== "") {
      setTitle("");
      setDescription("");
      setFile(null);
    }
    setError("Please Fill in the Forms");
  };
  return (
    <ContainerWrapper>
      {error && (
        <Alert sx={{ m: 1 }} variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <Card sx={{ p: 3 }}>
        <Box sx={{ mb: 3, display: "flex", flexDirection: "row" }}>
          <TextField
            sx={{ mr: 1 }}
            label="Enter a Title"
            fullWidth
            variant="filled"
            onChange={titleHandler}
            required
          />
          <TextField
            sx={{ mr: 1 }}
            label="Describe your Picture"
            fullWidth
            variant="filled"
            onChange={descriptionHandler}
            required
          />
          <label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              accept="image/*"
              multiple
              type="file"
              onChange={fileHandler}
            />
            <Button size="large" variant="contained" component="span">
              Select
            </Button>
          </label>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          {file && <ProgressBar progress={progress} />}
          {file && (
            <Alert sx={{ m: 1 }} variant="outlined" severity="success">
              Loading Your Photo...
            </Alert>
          )}
          <Button
            size="medium"
            variant="contained"
            sx={{ m: 2 }}
            onClick={submitHandler}
          >
            Upload!
          </Button>
        </Box>
      </Card>
    </ContainerWrapper>
  );
};

export default DetailedUpload;
