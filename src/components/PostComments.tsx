import { CardContent, Typography } from "@mui/material";
import { DocumentData, collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import useAppStore from "../store";

type Comment = {
  comment: string;
  createdAt: object;
  imageId: string;
  userId: string;
};
const PostComments = ({ postId }) => {
  //   const [comments, setComments] = useState<Comment[]>([]);

  const { comments, getCommentsById, isLoading, error } = useAppStore();
  console.log(comments);

  useEffect(() => {
    (() => {
      getCommentsById(postId);
    })();
  }, [postId]);

  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>{error}</div>;
  //   useEffect(() => {
  //     (async () => {
  //       const tmpData: DocumentData[] = [];

  //       const q = query(collection(db, "Posts", `${postId}`, "Comments"));

  //       const commentsSnapshot = await getDocs(q);
  //       commentsSnapshot.forEach((comment) => tmpData.push(comment.data()));

  //       setComments(tmpData);
  //     })();
  //   }, [postId]);

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
