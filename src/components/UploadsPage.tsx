import PageWrapper from "./PageWrapper";
import UploadsImgGrid from "./UploadsImgGrid";
import UploadImg from "./UploadImg";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";

const UploadsPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <PageWrapper column={true}>
      <Typography variant="h3" color="primary">
        Your Uploads
      </Typography>
      <IconButton onClick={() => setShowForm((state) => !state)}>
        <PhotoCamera color="primary" fontSize="large" />
      </IconButton>
      {showForm && <UploadImg />}
      <UploadsImgGrid />
    </PageWrapper>
  );
};

export default UploadsPage;
