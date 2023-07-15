import { useState, useEffect } from "react";
import { collection, limit, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { PostData } from "../components/Post";

const usePaginatedPosts = (postsLimit: number, collectionName: string) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, collectionName), limit(postsLimit)),
        (snapshot) => {
          const postDocuments: PostData[] = [];
          snapshot.forEach((doc) => {
            postDocuments.push({
              ...(doc.data() as PostData),
              id: doc.id,
            });
          });
          setPosts(postDocuments);
        }
      ),
    [postsLimit, collectionName]
  );
  return [posts];
};

export default usePaginatedPosts;
