import { useState } from "react";
import { Button, Container } from "@mui/material";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";
import { PostData } from "./Post";
import ScrollTopButton from "./ScrollTopButton";
import useCountDocs from "../hooks/useCountDocs";
import usePaginatedPosts from "../hooks/usePaginatedPosts";

const HomePage = () => {
  const [postsLimit, setPostsLimit] = useState(10);
  const [collectionLength] = useCountDocs("Posts");
  const [posts] = usePaginatedPosts(postsLimit, "Posts");

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
