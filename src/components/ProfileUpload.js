import React from "react";
import { useState } from "react";
import useUploadFirestore from "../hooks/uploads/useUploadFirestore";
import useUploadStorage from "../hooks/uploads/useUploadStorage";
import ProgressBar from "./ProgressBar";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

const ProfileUpload = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState("");

  const { url, progress } = useUploadStorage(file, formValues.title, upload);
  useUploadFirestore(url, true, formValues.title, formValues.description);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpload(true);
    console.log(formValues, file);
  };
  return (
    <Box>
      {error && (
        <Alert sx={{ m: 1 }} variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
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
            <Button size="large" variant="contained" component="span">
              Select
            </Button>
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
              type="submit"
            >
              Upload!
            </Button>
          </Box>
        </Card>
      </form>
    </Box>
  );
};

export default ProfileUpload;
