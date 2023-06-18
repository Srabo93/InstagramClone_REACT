import { Avatar, Box, CardContent, Stack, Typography } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

type PostCommentsProps = {
  postId: string;
};

type Comment = {
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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const q = query(collection(db, "Posts", `${postId}`, "Comments"));
        const commentDocuments: Comment[] = [];

        const commentsSnapshot = await getDocs(q);
        commentsSnapshot.forEach((comment) => {
          const updatedComment = comment.data();
          updatedComment.id = comment.id;

          commentDocuments.push(updatedComment as Comment);
        });

        if (!ignore) {
          setComments(commentDocuments);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    };

    let ignore = false;
    fetchComments();
    return () => {
      ignore = true;
    };
  }, [postId]);

  if (error) return <div>{error.message}</div>;

  return (
    <CardContent>
      {comments.map((comment, index: number) => (
        <Box key={comment.id}>
          <Stack spacing={2} direction="row">
            <Avatar src={comment.user.photoUrl}></Avatar>
            <Stack>
              <Typography>{comment.user.displayName}</Typography>
              <Typography variant="caption">
                commented: {new Date(comment.createdAt.seconds).toDateString()}
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
