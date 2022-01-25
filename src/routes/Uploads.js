import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import FlexBox from "../UI/FlexBox";
import UploadImgGrid from "../components/UploadImgGrid";
import UploadForm from "../components/UploadForm";
import { Typography } from "@mui/material";

const Uploads = () => {
  return (
    <ContainerWrapper>
      <FlexBox>
        <Typography variant="h2" sx={{ pb: 2, textAlign: "center" }}>
          Upload your Image
        </Typography>
        <Typography variant="h6" sx={{ pb: 1, textAlign: "center" }}>
          Thank you for Uploading! By the way feel free to use the upload
          function on the mainsite!
        </Typography>
        <UploadForm />
        <Typography variant="h4" sx={{ pb: 2 }}>
          Your Uploads
        </Typography>
        <UploadImgGrid />
      </FlexBox>
    </ContainerWrapper>
  );
};

export default Uploads;
