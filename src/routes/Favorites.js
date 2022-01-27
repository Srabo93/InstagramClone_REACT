import React from "react";
import Title from "../components/Title";
import ContainerWrapper from "../UI/ContainerWrapper";
import FlexBox from "../UI/FlexBox";
import UploadImgGrid from "../components/UploadImgGrid";
const Favorites = () => {
  const text = {
    h2: "Check out your Favourites",
    h6: "Manage your Favourites",
  };
  return (
    <ContainerWrapper>
      <FlexBox>
        <Title text={text} />
        <UploadImgGrid context="favourites" />
      </FlexBox>
    </ContainerWrapper>
  );
};

export default Favorites;
