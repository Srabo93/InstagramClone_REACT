import { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Box, TextareaAutosize, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useAppStore from "../store";

const PostAddComment = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState("");
  const currentUser = useAppStore((state) => state.user);

  const postCommentHandler = async (id: string) => {
    if (comment === "") return;
    if (currentUser.uid === "" || undefined) return;

    await addDoc(collection(db, "Posts", id, "Comments"), {
      comment,
      createdAt: serverTimestamp(),
      postId: id,
      user: currentUser,
    });
    setComment("");
  };

  return (
    <>
      {currentUser.uid !== "" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 2,
          }}
        >
          <TextareaAutosize
            maxLength={250}
            minRows={2}
            placeholder="Enter your Comment"
            style={{ width: 800, padding: 3 }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ marginLeft: 1 }}
            endIcon={<SendIcon />}
            onClick={() => postCommentHandler(postId)}
          >
            Send
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostAddComment;
