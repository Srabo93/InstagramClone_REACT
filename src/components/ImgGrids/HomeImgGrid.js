import React, { useEffect, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../API/firebase";

const HomeImgGrid = ({ onSetImg, onSetBackdrop }) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "Uploads")),
      (snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      }
    );

    return () => unsubscribe();
  }, []);

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
export default HomeImgGrid;
