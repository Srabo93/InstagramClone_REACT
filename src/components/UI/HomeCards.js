import React, { useState, useEffect } from "react";
import { useAuth } from "../../Auth/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { db } from "../../API/firebase";
import AddComment from "../AddComment";
import DisplayComments from "../DisplayComments";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { CardContent } from "@mui/material";
import { Collapse } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import { Container } from "@mui/material";

const HomeCards = ({ onSetImg, onSetBackdrop, docs }) => {
  const [favOpen, setFavOpen] = useState(false);
  const [openCommentSection, setOpenCommentSection] = useState(false);
  const [getCommentsById, setGetCommentsById] = useState(null);
  const [comments, setComments] = useState([]);
  const { currentUser } = useAuth();
  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

  const copyToClipboardHandler = (url) => {
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    if (getCommentsById === null) return;
    onSnapshot(
      query(
        collection(db, "Uploads", getCommentsById, "Comments"),
        where("docId", "==", getCommentsById)
      ),
      (snapShot) => {
        let documents = [];
        snapShot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setComments(documents);
      }
    );
  }, [getCommentsById]);

  const commentExpandHandler = (id) => {
    setGetCommentsById(id);
    setOpenCommentSection((prevState) => !prevState);
  };

  const favoritesHandler = async (id, url) => {
    await setDoc(doc(db, "Favorites", currentUser.uid, "Favorized", id), {
      img: url,
    });
    setFavOpen(true);
  };

  const closeFavNotification = (event, reason) => {
    if (reason === "clickaway") {
      setFavOpen(false);
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="primary"
        onClick={closeFavNotification}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const renderCards = docs.map((doc) => (
    <Card sx={{ mb: 2 }} key={doc.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="user">
            {doc.createdByUser.split("")[0].toUpperCase()}
          </Avatar>
        }
        title={doc.createdByUser.split("@")[0]}
        subheader={new Date(doc.createdAt.seconds * 1000).toLocaleDateString(
          "en-EN"
        )}
      />
      <CardMedia
        component="img"
        height="220"
        style={{ cursor: "pointer" }}
        onClick={() => modulHandler(doc)}
        src={doc.img}
        alt="randomImg"
      />
      <CardActions disableSpacing>
        <IconButton onClick={() => favoritesHandler(doc.id, doc.img)}>
          <FavoriteIcon color="primary" />
        </IconButton>
        <Tooltip
          disableFocusListener
          disableTouchListener
          title="Copy to Clipboard!"
          placement="right"
        >
          <IconButton onClick={() => copyToClipboardHandler(doc.img)}>
            <ShareIcon color="primary" />
          </IconButton>
        </Tooltip>
        <IconButton
          sx={{ marginLeft: "auto" }}
          expand={"false"}
          onClick={() => commentExpandHandler(doc.id)}
        >
          <CommentIcon color="primary" />
        </IconButton>
      </CardActions>
      <CardContent>
        <AddComment docId={doc.id} />
      </CardContent>
      <Collapse in={openCommentSection} timeout="auto" unmountOnExit>
        <CardContent>
          <DisplayComments comments={comments} cardId={doc.id} />
        </CardContent>
      </Collapse>
    </Card>
  ));

  return (
    <Container>
      {renderCards}{" "}
      <Snackbar
        open={favOpen}
        autoHideDuration={2000}
        onClose={closeFavNotification}
        message="To Favorites added"
        action={action}
      />
    </Container>
  );
};

export default HomeCards;
