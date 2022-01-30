import React from "react";
import useFirestore from "../hooks/useFirestore";
import { ImageList, ImageListItem } from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const ImageGridMasonry = ({ onSetImg, onSetBackdrop }) => {
  const { docs } = useFirestore("allImages");

  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

  // const favouriteHandler = (event) => {
  //   let favouriteURL =
  //     event.target.parentElement.parentElement.parentElement.parentElement
  //       .children[0].currentSrc;
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
            "linear-gradient(to bottom, #9e979a 0%, " +
            "rgba(0,0,0,0) 50%),rgba(0,0,0,0.3) 50%",
          borderRadius: "5px",
        }}
        position="top"
        // actionIcon={
        //   <FavouriteButtonState favouriteHandler={favouriteHandler} />
        // }
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
