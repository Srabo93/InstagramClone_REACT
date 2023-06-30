import PageWrapper from "./PageWrapper";
import UploadImgGrid from "../ImgGrids/UploadImgGrid";
import UploadImg from "./UploadImg";
import { Typography } from "@mui/material";

const UploadsPage = () => {
  return (
    <PageWrapper column={true}>
      <Typography variant="h3" color="primary">
        Your Uploads
      </Typography>
      <UploadImg />
      <Typography variant="h4" color="primary" sx={{ m: 2 }}>
        View your uploads
      </Typography>
      {/* <UploadImgGrid /> */}
    </PageWrapper>
  );
};

export default UploadsPage;
