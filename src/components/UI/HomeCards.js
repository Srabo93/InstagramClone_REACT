import React from "react";
import { useAuth } from "../../Auth/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../API/firebase";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Container } from "@mui/material";

const HomeCards = ({ onSetImg, onSetBackdrop, docs }) => {
  const { currentUser } = useAuth();

  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

  const favoritesHandler = async (id, url) => {
    await setDoc(doc(db, "Favorites", currentUser.uid, "Favorized", id), {
      img: url,
    });
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
        src={doc.img}
        alt="randomImg"
      />
      <CardActions>
        <IconButton onClick={() => favoritesHandler(doc.id, doc.img)}>
          <FavoriteIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  ));

  return <Container>{renderCards}</Container>;
};

export default HomeCards;
