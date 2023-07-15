import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PostCommentsSkeleton from "./PostCommentsSkeleton";
import PostAddComment from "./PostAddComment";
import PostCommentActions from "./PostCommentActions";
import LoggedIn from "./LoggedIn";
import usePaginatedComments from "../hooks/usePaginatedComments";
import useCountDocs from "../hooks/useCountDocs";

type PostCommentsProps = {
  postId: string;
};

export type Comment = {
  comment: string;
  createdAt: { seconds: number; nanoseconds: number };
  id: string;
  postId: string;
  user: {
    displayName: string;
    email: string;
    photoUrl: string;
    createdAt: { seconds: number; nanoseconds: number };
    uid: string;
  };
  likes?: number;
  dislikes?: number;
};

const PostComments = ({ postId }: PostCommentsProps) => {
  const [commentsLimit, setCommentsLimit] = useState(10);
  const [collectionLength] = useCountDocs(`Posts/${postId}/Comments`);
  const [comments] = usePaginatedComments(
    commentsLimit,
    `Posts/${postId}/Comments`
  );

  return (
    <>
      <PostAddComment postId={postId} />
      {comments.length === 0 && <PostCommentsSkeleton />}
      <CardContent>
        {comments.map((comment) => (
          <Box key={comment.id} sx={{ my: 2 }}>
            <Divider />
            <Stack spacing={2} direction="row" sx={{ my: 2 }}>
              <Avatar src={comment.user.photoUrl}></Avatar>
              <Stack>
                <Typography>{comment.user.displayName}</Typography>
                <Typography variant="caption">
                  commented:{" "}
                  {comment.createdAt === null
                    ? new Date().toISOString()
                    : new Date(comment.createdAt.seconds * 1000).toDateString()}
                </Typography>
              </Stack>
            </Stack>
            <Typography mt={2} paragraph>
              {comment.comment}
            </Typography>
            <LoggedIn>
              <PostCommentActions postId={postId} comment={comment} />
            </LoggedIn>
          </Box>
        ))}
        <Button
          disabled={collectionLength < commentsLimit}
          variant="outlined"
          sx={{ my: 3 }}
          onClick={() => setCommentsLimit((state) => state + 10)}
        >
          Load More...
        </Button>
      </CardContent>
    </>
  );
};

export default PostComments;
