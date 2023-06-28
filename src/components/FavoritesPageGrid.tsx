import { useEffect, useState } from "react";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Typography } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import useAppStore from "../store";
import { PostData } from "./Post";
import { Favorite } from "./FavoritesPage";

const FavoritesPageGrid = ({
  onSetFavorite,
  onSetBackdrop,
  favorites,
}: {
  onSetFavorite: (favourite: PostData) => void;
  onSetBackdrop: (arg: boolean) => void;
  favorites: Favorite[];
}) => {
  const [posts, setPosts] = useState<PostData[]>();
  const currentUser = useAppStore((state) => state.user);

  const userFavorites = posts?.filter((post) =>
    favorites?.some((favorite) => favorite.postId === post.id)
  );

  useEffect(() => {
    let cleanup = false;
    const fetchFavorites = async () => {
      try {
        const q = query(collection(db, "Posts"));
        const postsData: PostData[] = [];
        const queryPosts = await getDocs(q);

        queryPosts.forEach((doc) => {
          const updatedPost = doc.data();
          updatedPost.id = doc.id;
          postsData.push(updatedPost as PostData);
        });
        if (!cleanup) {
          setPosts(postsData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();

    return () => {
      cleanup = true;
    };
  }, [currentUser.uid]);

  const modulHandler = (favorite: PostData) => {
    onSetFavorite(favorite);
    onSetBackdrop(true);
  };

  const style = {
    boxShadow: "3px 5px 7px rgba(255,255,255, 0.3)",
    borderRadius: "5px",
    opacity: "1",
    cursor: "pointer",
  };

  const renderImgGrid = userFavorites?.map((favorite) => (
    <ImageListItem key={favorite.id}>
      <img
        style={style}
        src={favorite.imageUrl}
        srcSet={favorite.imageUrl}
        loading="lazy"
        onClick={() => modulHandler(favorite)}
        alt="randomimg"
      />
    </ImageListItem>
  ));

  return (
    <>
      {favorites && favorites.length > 0 ? (
        <ImageList variant="masonry" cols={3} gap={8}>
          {renderImgGrid}
        </ImageList>
      ) : (
        <Typography variant="body1" textAlign="center">
          No Favorites Found
        </Typography>
      )}
    </>
  );
};

export default FavoritesPageGrid;
