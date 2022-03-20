import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../API/firebase";
import { ImageListItemBar } from "@mui/material";
import { IconButton } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAuth } from "../../Auth/AuthContext";

const FavoritesImgGrid = ({ onSetImg, onSetBackdrop, docs }) => {
  const { currentUser } = useAuth();

  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

  const deleteHandler = async (id) => {
    await deleteDoc(doc(db, "Favorites", currentUser.uid, "Favorized", id));
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
  ));

  return (
    <React.Fragment>
      <ImageList variant="masonry" cols={3} gap={8}>
        {renderImgGrid}
      </ImageList>
    </React.Fragment>
  );
};

export default FavoritesImgGrid;
