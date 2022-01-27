import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import FlexBox from "../UI/FlexBox";
import UploadImgGrid from "../components/UploadImgGrid";
import UploadForm from "../components/UploadForm";
import { Typography } from "@mui/material";
import Title from "../components/Title";

const Uploads = () => {
  const text = {
    h2: "Upload Your Images",
    h6: "Thank you for Uploading! By the way feel free to use the upload function on the mainsite!",
  };
  return (
    <ContainerWrapper>
      <FlexBox>
        <Title text={text} />
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
