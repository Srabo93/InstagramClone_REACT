import React from "react";
import { useAuth } from "../Auth/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../API/firebase";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContainerWrapper from "./ContainerWrapper";

const HomeCards = ({ onSetImg, onSetBackdrop, docs }) => {
  const { currentUser } = useAuth();

  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

  const addToFavoritesHandler = async (event) => {
    let url;
    if (event.target.id === "") {
      url = event.target.parentElement.parentElement.id;
      await addDoc(collection(db, "Favorites"), {
        url,
        likedByUser: currentUser.email,
        createdAt: serverTimestamp(),
      });
    }
  };

  const renderCards = docs.map((doc) => (
    <Card sx={{ mb: 2 }} key={doc.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="user">
            {doc.createdByUser.split("")[0].toUpperCase()}
          </Avatar>
        }
        title={doc.createdByUser.split("@")[0]}
      />
      <CardMedia
        component="img"
        height="220"
        style={{ cursor: "pointer" }}
        onClick={() => modulHandler(doc)}
        src={doc.url}
        alt="randomImg"
      />
      <CardActions>
        <IconButton onClick={addToFavoritesHandler} id={doc.url}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  ));

  return <ContainerWrapper>{renderCards}</ContainerWrapper>;
};

export default HomeCards;
