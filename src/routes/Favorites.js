import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import ImageGridMasonry from "../components/ImageGridMasonry";
import Modal from "../components/Modal";
import { Box } from "@mui/system";

const Favorites = () => {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  const text = {
    h2: "Check your Favorites",
  };
  return (
    <Box>
      <Title text={text} />
      <ImageGridMasonry
        onSetImg={setImgData}
        onSetBackdrop={setBackdrop}
        store={`Favorites`}
      />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </Box>
  );
};

export default Favorites;
