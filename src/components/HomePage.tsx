import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

type PostData = {
  caption: string;
  createdAt: { seconds: number; nanoseconds: number };
  fileName: string;
  id: string;
  imageUrl: string;
  title: string;
  userId: string;
};

const HomePage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchPosts = () => {
      try {
        const q = query(collection(db, "Posts"));
        const postDocuments: PostData[] = [];

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            postDocuments.push({
              ...(doc.data() as PostData),
              id: doc.id,
            });
          });
          setPosts(postDocuments);
        });

        return () => unsubscribe();
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    };

    fetchPosts();
  }, []);

  if (error) return <div>{error.message}</div>;

  return (
    <div style={{ margin: "100px auto" }}>
      {posts?.map((post: PostData) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default HomePage;
