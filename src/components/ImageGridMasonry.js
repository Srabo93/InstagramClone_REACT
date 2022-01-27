import React from "react";
import { useMemo, useCallback, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import useFavourites from "../hooks/uploads/useFavourites";
import { ImageList, ImageListItem } from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ImageGridMasonry = ({ onSetImg, onSetBackdrop }) => {
  const { docs } = useFirestore("allImages");
  const [favourite, setFavourite] = useState(null);
  useFavourites(favourite);
  const modulHandler = useCallback(
    (doc) => {
      onSetImg(doc);
      onSetBackdrop(true);
    },
    [onSetImg, onSetBackdrop]
  );

  const style = {
    boxShadow: "3px 5px 7px rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
    opacity: 1,
    cursor: "pointer",
  };

  const favouriteHandler = (event) => {
    //URL SOURCE TO THE IMG TO BE SAVED IN THE HOOK
    let favouriteURL =
      event.target.parentElement.parentElement.parentElement.parentElement
        .children[0].currentSrc;

    console.log(
      event.target.parentElement.parentElement.parentElement.parentElement
        .children[0].currentSrc
    );
    // setFavourite(favouriteURL.replace(/^https?:\/\//, ""));
    setFavourite(favouriteURL);
  };
  const renderImgGrid = useMemo(
    () =>
      docs.map((doc) => (
        <ImageListItem key={doc.id} sx={{ borderRadius: 16 }}>
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
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
            position="top"
            actionIcon={
              <IconButton
                color="primary"
                aria-label="label"
                onClick={favouriteHandler}
              >
                <FavoriteBorderIcon fontSize="large" />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      )),
    [docs, modulHandler]
  );

  return (
    <React.Fragment>
      <ImageList variant="masonry" cols={3} gap={8}>
        {renderImgGrid}
      </ImageList>
    </React.Fragment>
  );
};
export default ImageGridMasonry;
