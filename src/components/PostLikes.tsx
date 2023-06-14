import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const PostLikes = ({ postId }) => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    (async () => {
      let tmp = [];
      const q = query(collection(db, "Posts", `${postId}`, "Likes"));
      const likesSnapshot = await getDocs(q);
      likesSnapshot.forEach((like) => tmp.push(like.data()));

      setLikes(tmp);
    })();
  }, [postId]);
  return (
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
      {likes.length}
    </IconButton>
  );
};

export default PostLikes;
