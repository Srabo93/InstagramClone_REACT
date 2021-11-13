import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ selectImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => selectImg(doc.url)}
          >
            <img src={doc.url} alt="firepic" />
          </div>
        ))}
    </div>
  );
};
export default ImageGrid;
