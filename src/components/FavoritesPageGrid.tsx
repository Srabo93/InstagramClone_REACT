import { useEffect, useState } from "react";
import {
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  arrayRemove,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { Skeleton } from "@mui/material";
import {
  ImageListItemBar,
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import useAppStore from "../store";
import { PostData } from "./Post";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const FavoritesPageGrid = ({
  onSetFavorite,
  onSetBackdrop,
  posts,
}: {
  onSetFavorite: (favourite: PostData) => void;
  onSetBackdrop: (arg: boolean) => void;
  posts: PostData[];
}) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const favorites = posts?.filter((post) => favoriteIds.includes(post.id));
  const currentUser = useAppStore((state) => state.user);

  useEffect(
    () =>
      onSnapshot(doc(db, "Users2", `${currentUser.uid}`), (user) => {
        const favoriteIdsArray = user.data()?.favorites;
        if (favoriteIdsArray) {
          setFavoriteIds(favoriteIdsArray);
        }
      }),
    []
  );

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

  const deleteHandler = async (pId: string) => {
    await updateDoc(doc(db, "Users2", `${currentUser.uid}`), {
      favorites: arrayRemove(pId),
    });
    const q = query(collection(db, "Posts", `${pId}`, "Likes"));
    const likes = await getDocs(q);
    let likeId;
    likes.forEach((like) => {
      if (like.data().userId === currentUser.uid) {
        return (likeId = like.id);
      }
    });
    const likesRef = doc(db, "Posts", `${pId}`, "Likes", `${likeId}`);
    await deleteDoc(likesRef);
  };

  const renderImgGrid = favorites?.map((favorite) => (
    <ImageListItem key={favorite.id}>
      <img
        style={style}
        src={favorite.imageUrl}
        srcSet={favorite.imageUrl}
        loading="lazy"
        onClick={() => modulHandler(favorite)}
        alt="randomimg"
      />
      <ImageListItemBar
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
        }}
        position="top"
        actionIcon={
          <IconButton
            sx={{ color: "white" }}
            onClick={() => deleteHandler(favorite.id)}
          >
            <DeleteForeverIcon />
          </IconButton>
        }
        actionPosition="left"
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
        <Skeleton
          sx={{ bgcolor: "secondary" }}
          variant="rectangular"
          maxWidth={500}
          height={418}
        />
      )}
    </>
  );
};

export default FavoritesPageGrid;
