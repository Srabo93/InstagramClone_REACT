import React from "react";
import useFirestore from "../hooks/useFirestore";
import classes from "./ImageGrid.module.css";

const ImageGrid = ({ selectImgData }) => {
  const { docs } = useFirestore("images");

  return (
    <div className={classes.img_grid}>
      {docs &&
        docs.map((doc) => (
          <div
            className={classes.img_wrap}
            key={doc.id}
            onClick={() => selectImgData(doc)}
          >
            <img src={doc.url} alt="firepic" />
          </div>
        ))}
    </div>
  );
};
export default ImageGrid;
