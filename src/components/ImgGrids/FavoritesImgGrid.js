import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const FavoritesImgGrid = ({ onSetImg, onSetBackdrop, docs }) => {
  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

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
        src={doc.img}
        srcSet={doc.img}
        loading="lazy"
        onClick={() => modulHandler(doc)}
        alt="randomimg"
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

export default FavoritesImgGrid;
