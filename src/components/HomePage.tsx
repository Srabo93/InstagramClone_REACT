import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Container } from "@mui/material";
import PostSkeleton from "./PostSkeleton";

type PostData = {
  caption: string;
  createdAt: { seconds: number; nanoseconds: number };
  fileName: string;
  id: string;
  imageUrl: string;
  title: string;
  userId: string;
  user: {
    displayName: string;
    email: string;
    photoUrl: string;
    createdAt: { seconds: number; nanoseconds: number };
  };
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
    <Container
      maxWidth="md"
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!posts.length && <PostSkeleton />}
      {posts?.map((post: PostData) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
};

export default HomePage;
