import { useEffect } from "react";
import Post from "./Post";

const HomePage = () => {
  // useEffect(() => {
  //   try {
  //     (async () => {
  //       await fetchPosts();
  //     })();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [fetchPosts]);
  return (
    <div style={{ margin: "100px auto" }}>
      <Post />
    </div>
  );
};

export default HomePage;
