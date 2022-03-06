import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../API/firebase";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAuth } from "../../Auth/AuthContext";

const UploadImgGrid = () => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useAuth();
  const storage = getStorage();

  const deleteHandler = async (id, name) => {
    await deleteDoc(doc(db, "Uploads", id));

    const desertRef = ref(storage, `Uploads/${currentUser.email}/${name}`);
    await deleteObject(desertRef);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, `Uploads/`),
        where("createdByUser", "==", currentUser.email)
      ),
      (snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      }
    );
    return () => unsubscribe();
  }, [currentUser.email]);

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
                onClick={() => deleteHandler(doc.id, doc.fileName)}
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
