import { useEffect, useState } from "react";
import {
  collection,
  getCountFromServer,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { Button, Container } from "@mui/material";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";
import { PostData } from "./Post";
import ScrollTopButton from "./ScrollTopButton";

const HomePage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [postsLimit, setPostsLimit] = useState(10);
  const [collectionLength, setCollectionLength] = useState(0);

  useEffect(() => {
    (async () => {
      const allDocs = await getCountFromServer(collection(db, "Posts"));
      setCollectionLength(allDocs.data().count);
    })();
  }, []);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "Posts"), limit(postsLimit)),
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
    [postsLimit, collectionLength]
  );

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
      <Button
        disabled={collectionLength < postsLimit}
        variant="outlined"
        sx={{ my: 3 }}
        onClick={() => setPostsLimit((state) => state + 10)}
      >
        Load More...
      </Button>
      <ScrollTopButton />
    </Container>
  );
};

export default HomePage;
