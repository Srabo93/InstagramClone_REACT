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
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState("");
  const { url, progress } = useUploadStorage(file, formValues.title, upload);
  useUploadFirestore(url, true, formValues.title, formValues.description);

  const Input = styled("input")({
    display: "none",
  });
  const types = ["image/png", "image/jpeg"];

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);

    if (types.includes(selectedFile.type)) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpload(true);
    console.log(formValues, file);
  };
  return (
    <ContainerWrapper>
      {error && (
        <Alert sx={{ m: 1 }} variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <form>
        <Card sx={{ p: 3 }}>
          <Box sx={{ mb: 3, display: "flex", flexDirection: "row" }}>
            <TextField
              sx={{ mr: 1 }}
              label="Enter a Title"
              name="title"
              fullWidth
              variant="filled"
              onChange={handleTextChange}
              required
            />
            <TextField
              sx={{ mr: 1 }}
              label="Describe your Picture"
              name="description"
              fullWidth
              variant="filled"
              onChange={handleTextChange}
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
                onChange={handleFileChange}
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
              onClick={handleSubmit}
            >
              Upload!
            </Button>
          </Box>
        </Card>
      </form>
    </ContainerWrapper>
  );
};

export default DetailedUpload;
