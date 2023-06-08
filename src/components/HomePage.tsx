import { useEffect } from "react";
import useAppStore from "../store";

const HomePage = () => {
  const fetchPosts = useAppStore((state) => state.getAllPosts);

  const posts = useAppStore((state) => state.posts);
  console.log(posts);

  useEffect(() => {
    try {
      (async () => {
        await fetchPosts();
      })();
    } catch (error) {
      console.log(error);
    }
  }, [fetchPosts]);
  return <div style={{ margin: "100px auto" }}>HomePage</div>;
};

export default HomePage;
