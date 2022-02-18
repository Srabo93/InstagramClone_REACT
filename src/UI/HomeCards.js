import React from "react";
import { useAuth } from "../Auth/AuthContext";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ContainerWrapper from "./ContainerWrapper";

const HomeCards = ({ onSetImg, onSetBackdrop, docs }) => {
  const { currentUser } = useAuth();

  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };
  const renderCards = docs.map((doc) => (
    <Card sx={{ mb: 2 }} key={doc.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="user">
            R
          </Avatar>
        }
        title={currentUser.email.split("@")[0]}
      />
      <CardMedia
        component="img"
        height="220"
        style={{ cursor: "pointer" }}
        onClick={() => modulHandler(doc)}
        src={doc.url}
        alt="randomImg"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  ));

  return <ContainerWrapper>{renderCards}</ContainerWrapper>;
};

export default HomeCards;
