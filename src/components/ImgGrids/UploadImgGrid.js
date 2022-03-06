import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../API/firebase";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadImgGrid = () => {
  const [docs, setDocs] = useState([]);

  const deleteHandler = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, `Uploads/`)),
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

  return (
    <ImageList
      sx={{ maxWidth: "800px", maxHeight: "500px", mb: 5 }}
      cols={4}
      rowHeight={164}
    >
      {docs.map((doc) => (
        <ImageListItem key={doc.id} sx={{ maxWidth: "md", maxHeight: 150 }}>
          <img
            style={{ maxWidth: 300, maxHeight: 150, cursor: "default" }}
            src={doc.img}
            srcSet={doc.img}
            alt="randomimg"
            loading="lazy"
            sx={{ pt: 1 }}
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
                sx={{ color: "white" }}
                onClick={() => deleteHandler(doc.id)}
              >
                <DeleteForeverIcon />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default UploadImgGrid;
