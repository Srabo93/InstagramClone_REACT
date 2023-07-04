import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import useAppStore from "../store";
import Modal from "./Modal";
import { Box, Typography } from "@mui/material";
import FavoritesPageGrid from "./FavoritesPageGrid";
import PageWrapper from "./PageWrapper";
import { PostData } from "./Post";

const FavoritesPage = () => {
  const [backdrop, setBackdrop] = useState(false);
  const [posts, setPosts] = useState<PostData[]>();
  const [favorite, setFavorite] = useState<PostData>();
  const currentUser = useAppStore((state) => state.user);

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

  return (
    <PageWrapper>
      <Box>
        <Typography
          variant="h3"
          textAlign="center"
          color="primary"
          gutterBottom
        >
          Your Favorites
        </Typography>
        <FavoritesPageGrid
          posts={posts}
          onSetFavorite={setFavorite}
          onSetBackdrop={setBackdrop}
        />
        {backdrop && (
          <Modal
            favorite={favorite}
            open={backdrop}
            onSetBackdrop={setBackdrop}
          />
        )}
      </Box>
    </PageWrapper>
  );
};

export default FavoritesPage;
