import React from "react";
import useFirestore from "../hooks/FirebaseHandler/useFirestore";

const ImageGrid = ({ selectImgData }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
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
