import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import UploadImgGrid from "../components/UploadImgGrid";
import QuickUpload from "../components/QuickUpload";
import Title from "../components/Title";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Uploads = () => {
  const text = {
    h2: "Upload Your Images",
    h6: "Thank you for Uploading!",
  };
  return (
    <ContainerWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title text={text} />
        <QuickUpload />
        <Typography variant="h4" sx={{ mb: 5 }}>
          Your Uploads
        </Typography>
        <UploadImgGrid />
      </Box>
    </ContainerWrapper>
  );
};

export default Uploads;
