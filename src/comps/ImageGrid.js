import React from "react";
import useFirestore from "../hooks/useFirestore";
import { ImageList, ImageListItem } from "@mui/material";

const ImageGrid = ({ selectImgData }) => {
  const { docs } = useFirestore("images");

  return (
    <React.Fragment>
      <ImageList variant="masonry" cols={3} gap={8}>
        {docs.map((doc) => (
          <ImageListItem key={doc.id}>
            <img src={doc.url} srcSet={doc.url} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </React.Fragment>
  );
};
export default ImageGrid;
