import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import PostCommentsSkeleton from "./PostCommentsSkeleton";

type PostCommentsProps = {
  postId: string;
};

export type Comment = {
  comment: string;
  createdAt: { seconds: number; nanoseconds: number };
  id: string;
  postId: string;
  userId: string;
  user: {
    displayName: string;
    email: string;
    photoUrl: string;
    createdAt: { seconds: number; nanoseconds: number };
  };
};

const PostComments = ({ postId }: PostCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<Error | undefined>();

  useEffect(
    () =>
      onSnapshot(
        collection(db, "Posts", `${postId}`, "Comments"),
        (snapshot) => {
          const commentDocuments: Comment[] = [];
          snapshot.forEach((comment) => {
            const updatedComment = comment.data();
            updatedComment.id = comment.id;
            commentDocuments.push(updatedComment as Comment);
          });
          setComments(commentDocuments);
        }
  if (error) return <div>{error.message}</div>;

  return (
    <CardContent sx={{ maxWidth: "100%" }}>
      {!comments.length && <PostCommentsSkeleton />}
      {comments.map((comment, index: number) => (
        <Box key={comment.id} sx={{ my: 2 }}>
          <Divider />
          <Stack spacing={2} direction="row" sx={{ my: 2 }}>
            <Avatar src={comment.user.photoUrl}></Avatar>
            <Stack>
              <Typography>{comment.user.displayName}</Typography>
              <Typography variant="caption">
                commented:{" "}
                {new Date(comment.createdAt.seconds * 1000).toDateString()}
              </Typography>
            </Stack>
          </Stack>
          <Typography mt={2} key={index} paragraph>
            {comment.comment}
          </Typography>
        </Box>
      ))}
    </CardContent>
  );
};

export default PostComments;
