import React from "react";
import useFirestore from "../hooks/useFirestore";
import { ImageList, ImageListItem } from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const ImageGridMasonry = ({ onSetImg, onSetBackdrop }) => {
  const { docs } = useFirestore("All_Images");

  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

  // const favouriteHandler = (event) => {
  //
  //   // let favouriteURL =
  //   //   event.target.parentElement.parentElement.parentElement.parentElement
  //   //     .children[0].currentSrc;
  // };

  const style = {
    boxShadow: "3px 5px 7px rgba(255,255,255, 0.3)",
    borderRadius: "5px",
    opacity: "1",
    cursor: "pointer",
  };

  const renderImgGrid = docs.map((doc) => (
    <ImageListItem key={doc.id}>
      <img
        style={style}
        src={doc.url}
        srcSet={doc.url}
        loading="lazy"
        onClick={() => modulHandler(doc)}
        alt="randomimg"
      />
      <ImageListItemBar
        sx={{
          background:
            "linear-gradient(90deg," +
            "rgba(242,63,251,0.6311566863073355) 0%," +
            "rgba(252,70,107,0.863649683506215) 100%",
        }}
        style={{ borderRadius: "5px" }}
        position="top"
        actionIcon={<FavoriteBorderIcon fontSize="large" />}
        actionPosition="left"
      />
    </ImageListItem>
  ));

  return (
    <React.Fragment>
      <ImageList variant="masonry" cols={3} gap={8}>
        {renderImgGrid}
      </ImageList>
    </React.Fragment>
  );
};
export default ImageGridMasonry;
