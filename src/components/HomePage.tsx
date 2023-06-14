import Post from "./Post";
import useAppStore from "../store";

const HomePage = () => {
  const { posts, isLoading, error } = useAppStore();

  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>{error}</div>;

  console.log(posts);
  return (
    <div style={{ margin: "100px auto" }}>
      {posts?.map((post) => (
        <Post post={post} key={post.imageId} />
      ))}
    </div>
  );
};

export default HomePage;
