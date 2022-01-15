import React from "react";
import { useMemo, useCallback } from "react";
import useFirestore from "../hooks/uploads/useFirestore";
import { ImageList, ImageListItem } from "@mui/material";

const ImageGrid = ({ onSetImg, onSetBackdrop }) => {
  const { docs } = useFirestore("allImages");

  const modulHandler = useCallback(
    (doc) => {
      onSetImg(doc);
      onSetBackdrop(true);
    },
    [onSetImg, onSetBackdrop]
  );
  const renderImgGrid = useMemo(
    () =>
      docs.map((doc) => (
        <ImageListItem key={doc.id} sx={{ borderRadius: 16 }}>
          <img
            src={doc.url}
            srcSet={doc.url}
            loading="lazy"
            onClick={() => modulHandler(doc)}
            alt="randomimg"
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
export default ImageGrid;
