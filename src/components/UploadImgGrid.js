import React from "react";
import { db } from "../API/firebase";
import { useAuth } from "../Auth/AuthContext";
import useFirestore from "../hooks/useFirestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadImgGrid = () => {
  const { currentUser } = useAuth();
  const { docs } = useFirestore(`Users`, currentUser.email);

  const deleteHandler = async (event, document) => {
    console.log(event.target.value);

    // await deleteDoc(
    //   doc(db, `Users/${currentUser.email}/Uploads`, event.target.id)
    // );
    // const storage = getStorage();
    // const desertRef = ref(
    //   storage,
    //   `Users/${currentUser.email}/uploads/${file.name}`
    // );
    // deleteObject(desertRef);
  };
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
            src={doc.url}
            srcSet={doc.url}
            alt="randomimg"
            loading="lazy"
            sx={{ pt: 1 }}
          />
          <ImageListItemBar
            position="top"
            actionIcon={
              <IconButton
                color="primary"
                onClick={deleteHandler}
                value={doc.url}
              >
                <DeleteForeverIcon fontSize="large" />
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
