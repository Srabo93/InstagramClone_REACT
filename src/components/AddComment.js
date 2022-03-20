import React from "react";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAuth } from "../Auth/AuthContext";
import { db } from "../API/firebase";
import { Box } from "@mui/system";
import { TextareaAutosize } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const AddComment = ({ docId }) => {
  const [comment, setComment] = useState("");
  const { currentUser } = useAuth();

  const postCommentHandler = async (id) => {
    await setDoc(doc(db, "Uploads", id, "Comments", currentUser.uid), {
      createdByUser: currentUser.email,
      createdAt: serverTimestamp(),
      docId: id,
      comment,
    });
    setComment("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 1,
      }}
    >
      <TextareaAutosize
        maxLength={250}
        minRows={2}
        placeholder="Comment"
        style={{ width: 800 }}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ marginLeft: 1 }}
        endIcon={<SendIcon />}
        onClick={() => postCommentHandler(docId)}
      >
        Send
      </Button>
    </Box>
  );
};

export default AddComment;
