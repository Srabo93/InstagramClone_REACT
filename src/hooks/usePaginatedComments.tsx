import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Comment } from "../components/PostComments";

const usePaginatedComments = (
  commentsLimit: number,
  collectionName: string
) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, collectionName),
          orderBy("createdAt", "desc"),
          limit(commentsLimit)
        ),
        (snapshot) => {
          const commentDocuments: Comment[] = [];
          snapshot.forEach((comment) => {
            const updatedComment = comment.data();
            updatedComment.id = comment.id;
            commentDocuments.push(updatedComment as Comment);
          });
          setComments(commentDocuments);
        }
      ),
    [collectionName, commentsLimit]
  );
  return [comments];
};
export default usePaginatedComments;
