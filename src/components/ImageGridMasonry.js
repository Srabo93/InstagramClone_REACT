import React from "react";
import { useMemo, useCallback } from "react";
import useFirestore from "../hooks/useFirestore";
import { ImageList, ImageListItem } from "@mui/material";

const ImageGridMasonry = ({ onSetImg, onSetBackdrop }) => {
  const { docs } = useFirestore("allImages");

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
    opacity: 0.8,
    cursor: "pointer",
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
        </ImageListItem>
      )),
    [docs, style, modulHandler]
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
