import { Formik, Form, ErrorMessage } from "formik";
import {
  Box,
  Alert,
  Button,
  TextareaAutosize,
  TextField,
  LinearProgress,
  Paper,
} from "@mui/material";
import { z } from "zod";
import { styled } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";
import useUploadStorage from "../hooks/useUploadStorage";

const validationSchema = z.object({
  image: z
    .instanceof(File)
    .refine((value) => value !== null, { message: "Image is required" }),
  description: z.string().min(1, { message: "description is required" }),
  title: z.string().min(1, { message: "Title is required" }),
});

export type FormData = {
  file: File | undefined;
  description: string;
  title: string;
};

const UploadImg = () => {
  const [formData, setFormData] = useState<FormData>();

  const { progress, error } = useUploadStorage(formData);

  const handleFormSubmit = (values: {
    image: File | undefined;
    description: string;
    title: string;
  }) => {
    setFormData({
      file: values.image,
      description: values.description,
      title: values.title,
    });
  };

  const CustomLabel = styled("label")({
    fontWeight: "bold",
    fontSize: "1.6rem",
    marginBottom: "0.5rem",
  });

  return (
    <Paper>
      <Box
        sx={{
          m: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {formData && (
          <Box width="100%">
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        )}
        {error && <Alert severity="error">{error}</Alert>}
        <Formik
          initialValues={{ image: undefined, description: "", title: "" }}
          validate={(values) => {
            try {
              validationSchema.parse(values);
              return {};
            } catch (error: any) {
              return error.formErrors.fieldErrors;
            }
          }}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched, isSubmitting, setFieldValue }) => (
            <Form>
              <Box
                sx={{
                  m: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <CustomLabel htmlFor="image">Image:</CustomLabel>
                <input
                  id="image"
                  name="image"
                  type="file"
                  style={{ width: "300px" }}
                  onChange={(event) => {
                    setFieldValue(
                      "image",
                      event.currentTarget.files?.[0] || null
                    );
                  }}
                />
                {errors.image && touched.image && (
                  <ErrorMessage
                    name="image"
                    component={Alert}
                    severity="error"
                    sx={{ mt: 3 }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  m: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <CustomLabel htmlFor="title">Title:</CustomLabel>
                <TextField
                  type="text"
                  id="title"
                  name="title"
                  size="small"
                  color="primary"
                  placeholder="Enter a title"
                  variant="filled"
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    setFieldValue("title", event.target?.value);
                  }}
                />
                {errors.title && touched.title && (
                  <ErrorMessage
                    name="title"
                    component={Alert}
                    severity="error"
                  />
                )}
              </Box>
              <Box
                sx={{
                  m: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <CustomLabel htmlFor="description">Description:</CustomLabel>
                <TextareaAutosize
                  id="description"
                  name="description"
                  placeholder="Enter a description"
                  minRows={5}
                  style={{ width: "300px" }}
                  onChange={(event) => {
                    setFieldValue("description", event.target.value || null);
                  }}
                />
                {errors.description && touched.description && (
                  <ErrorMessage
                    name="description"
                    component={Alert}
                    severity="error"
                    sx={{ mt: 3 }}
                  />
                )}
              </Box>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                sx={{ ml: 5 }}
              >
                Upload
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
};

export default UploadImg;
