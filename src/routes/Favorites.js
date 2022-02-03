import React from "react";
import Title from "../components/Title";
import ContainerWrapper from "../UI/ContainerWrapper";
import { Box } from "@mui/system";
import UploadImgGrid from "../components/UploadImgGrid";
const Favorites = () => {
  const text = {
    h2: "Check out your Favourites",
    h6: "Manage your Favourites",
  };
  return (
    <ContainerWrapper>
      <Box>
        <Title text={text} />
        <UploadImgGrid context="favourites" />
      </Box>
    </ContainerWrapper>
  );
};

export default Favorites;
