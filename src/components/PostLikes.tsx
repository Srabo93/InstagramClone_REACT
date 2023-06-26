import {
  doc,
  deleteDoc,
  addDoc,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import useAppStore from "../store";

type PostLikesProps = {
  postId: string;
};

export type Like = {
  userId: string;
  id: string;
};

const PostLikes = ({ postId }: PostLikesProps) => {
  const [likes, setLikes] = useState<Like[]>([]);
  const currentUser = useAppStore((state) => state.user);

  const addFavorite = async (pId: string) => {
    await addDoc(collection(db, "Users2", `${currentUser.uid}`, "Favorites"), {
      postId: pId,
    });
    await addDoc(collection(db, "Posts", `${pId}`, "Likes"), {
      userId: currentUser.uid,
    });
  };

  const removeFavorite = async (pId: string) => {
    const likesId = likes.filter((like) => like.userId === currentUser?.uid);
    const userRef = doc(
      db,
      "Users2",
      `${currentUser.uid}`,
      "Favorites",
      `${pId}`
    );
    const likesRef = doc(db, "Posts", `${pId}`, "Likes", likesId[0].id);
    await deleteDoc(userRef);
    await deleteDoc(likesRef);
  };

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "Posts", `${postId}`, "Likes")),
        (snapshot) => {
          const likesDocuments: Like[] = [];
          snapshot.forEach((like) => {
            const updatedLike = like.data();
            updatedLike.id = like.id;
            likesDocuments.push(updatedLike as Like);
          });
          setLikes(likesDocuments);
        }
      ),
    [postId]
  );

  const isLikedByCurrentUser = likes.some(
    (like) => like.userId === currentUser?.uid
  );

  const likeButton = (
    <IconButton
      aria-label="add to favorites"
      onClick={() => addFavorite(postId)}
    >
      <FavoriteIcon />
    </IconButton>
  );

  const likedButton = (
    <IconButton
      aria-label="add to favorites"
      onClick={() => removeFavorite(postId)}
    >
      <FavoriteIcon color="primary" />
    </IconButton>
  );

  const likeIcon = isLikedByCurrentUser ? likedButton : likeButton;
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
    >
      {likeIcon}
      <Typography variant="h5">{likes.length}</Typography>
    </Stack>
  );
};

export default PostLikes;
