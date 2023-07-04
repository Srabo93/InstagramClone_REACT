import {
  doc,
  updateDoc,
  increment,
  deleteDoc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { Button, ButtonGroup, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Comment } from "./PostComments";
import DeleteIcon from "@mui/icons-material/Delete";
import useAppStore from "../store";
import { useEffect, useState } from "react";

const PostCommentActions = ({
  postId,
  comment,
}: {
  postId: string;
  comment: Comment;
}) => {
  const [commentLikes, setCommentLikes] = useState<string[]>([]);
  const [commentDislikes, setCommentDislikes] = useState<string[]>([]);

  const currentUser = useAppStore((state) => state.user);
  const commentRef = doc(db, "Posts", `${postId}`, "Comments", `${comment.id}`);
  const userRef = doc(db, "Users2", `${currentUser.uid}`);

  useEffect(
    () =>
      onSnapshot(userRef, (doc) => {
        const data = doc.data();
        if (data?.commentsLikes) {
          const likeData: string[] = [...data.commentsLikes];
          setCommentLikes(likeData);
        }
        if (data?.commentsDislikes) {
          const dislikeData: string[] = [...data.commentsDislikes];
          setCommentDislikes(dislikeData);
        }
      }),
    []
  );

  const addLikeHandler = async () => {
    await updateDoc(commentRef, {
      likes: increment(1),
    });

    // await setDoc(userRef, {
    //   commentsLikes: [],
    // });
    await updateDoc(userRef, {
      commentsLikes: arrayUnion(comment.id),
    });
  };

  const addDislikeHandler = async () => {
    await updateDoc(commentRef, {
      dislikes: increment(1),
    });
    // await setDoc(userRef, {
    //   commentsDislikes: [],
    // });
    await updateDoc(userRef, {
      commentsDislikes: arrayUnion(comment.id),
    });
  };

  const deleteCommentHandler = async () => {
    await deleteDoc(commentRef);
  };

  const isLiked = commentLikes.some(
    (likedComment) => likedComment === comment.id
  );

  const isDisliked = commentDislikes.some(
    (dislikedComment) => dislikedComment === comment.id
  );

  return (
    <ButtonGroup
      sx={{ display: "flex", justifyContent: "flex-end" }}
      variant="text"
      aria-label="like / dislike group"
      size="small"
      disabled={isLiked || isDisliked}
    >
      <Button onClick={addLikeHandler}>
        <ThumbUpIcon
          color={isLiked ? "primary" : "secondary"}
          fontSize="small"
        />
        <Typography sx={{ px: 1 }}>{comment.likes}</Typography>
      </Button>
      <Button sx={{ px: 1 }} onClick={addDislikeHandler}>
        <ThumbDownIcon
          color={isDisliked ? "primary" : "secondary"}
          fontSize="small"
        />
        <Typography sx={{ px: 1 }}>{comment.dislikes}</Typography>
      </Button>
      {comment.user.uid === currentUser.uid && (
        <Button sx={{ px: 1 }} onClick={deleteCommentHandler}>
          <DeleteIcon color="secondary" fontSize="small" />
        </Button>
      )}
    </ButtonGroup>
  );
};

export default PostCommentActions;
