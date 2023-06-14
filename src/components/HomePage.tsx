import Post from "./Post";
import useAppStore from "../store";

const HomePage = () => {
  const { posts, isLoading, error } = useAppStore();

  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ margin: "100px auto" }}>
      {posts?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default HomePage;
