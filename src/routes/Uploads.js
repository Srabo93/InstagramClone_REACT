import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import UploadForm from "../components/UploadForm";
import { Typography } from "@mui/material";
import FlexBoxContainer from "../UI/FlexBoxContainer";

const Uploads = () => {
  return (
    <ContainerWrapper>
      <FlexBoxContainer>
        <Typography variant="h2">Upload your Image</Typography>
        <Typography variant="h6" sx={{ p: 2, textAlign: "center" }}>
          Thank you for Uploading! By the way feel free to use the upload
          function on the mainsite!
        </Typography>
        <UploadForm />
      </FlexBoxContainer>
    </ContainerWrapper>
  );
};

export default Uploads;
