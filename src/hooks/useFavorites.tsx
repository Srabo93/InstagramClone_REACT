import { useEffect, useState } from "react";
import useAppStore from "../store";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { PostData } from "../components/Post";

const useFavorites = () => {
  const currentUser = useAppStore((state) => state.user);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    let cleanup = false;
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "Posts"));
        const postsArray: PostData[] = [];
        const queryPosts = await getDocs(q);

        queryPosts.forEach((post) => {
          const postData = post.data();
          postData.id = post.id;
          postsArray.push(postData as PostData);
        });
        if (!cleanup) {
          setPosts(postsArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();

    return () => {
      cleanup = true;
    };
  }, [currentUser.uid]);

  return [posts];
};

export default useFavorites;
