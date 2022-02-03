import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import UploadImgGrid from "../components/UploadImgGrid";
import DetailedUpload from "../components/DetailedUpload";
import Title from "../components/Title";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Uploads = () => {
  const text = {
    h2: "Upload Your Images",
    h6: "Thank you for Uploading! By the way feel free to use the Quickupload function on the mainsite, to skip a more detailed Upload!",
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
        <DetailedUpload />
        <Typography variant="h4" sx={{ mt: 5 }}>
          Your Uploads
        </Typography>
        <UploadImgGrid />
      </Box>
    </ContainerWrapper>
  );
};

export default Uploads;
