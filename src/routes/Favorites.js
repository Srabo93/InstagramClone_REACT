import React from "react";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import Title from "../components/Title";
import ContainerWrapper from "../UI/ContainerWrapper";
import ImageGridMasonry from "../components/ImageGridMasonry";
import Modal from "../components/Modal";
import { Box } from "@mui/system";

const Favorites = () => {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const { currentUser } = useAuth();

  const text = {
    h2: "Check out your Favourites",
    h6: "Manage your Favourites",
  };
  return (
    <ContainerWrapper>
      <Box>
        <Title text={text} />
        <ImageGridMasonry
          onSetImg={setImgData}
          onSetBackdrop={setBackdrop}
          store={`Users/${currentUser.email}/Favorites`}
        />
        {backdrop && (
          <Modal
            imgDocs={imgData}
            open={backdrop}
            onSetBackdrop={setBackdrop}
          />
        )}
      </Box>
    </ContainerWrapper>
  );
};

export default Favorites;
