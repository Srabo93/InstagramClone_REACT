import { CardContent, Typography } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

type PostCommentsProps = {
  postId: string;
};

type Comment = {
  comment: string;
  createdAt: { seconds: number; nanoseconds: number };
  imageId: string;
  userId: string;
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
        commentsSnapshot.forEach((comment) =>
          commentDocuments.push(comment.data() as Comment)
        );

        if (!ignore) {
          setComments(commentDocuments);
        }
      } catch (error) {
        setError(error);
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
        <Typography key={index} paragraph>
          {comment.comment}
        </Typography>
      ))}
    </CardContent>
  );
};

export default PostComments;
