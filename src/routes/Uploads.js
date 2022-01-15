import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import FlexBoxContainer from "../UI/FlexBoxContainer";
import UploadImgGrid from "../components/UploadImgGrid";
import UploadForm from "../components/UploadForm";
import { Typography } from "@mui/material";

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
        <Typography variant="h4" sx={{ m: 3 }}>
          Deine Uploads
        </Typography>
        <UploadImgGrid />
      </FlexBoxContainer>
    </ContainerWrapper>
  );
};

export default Uploads;
