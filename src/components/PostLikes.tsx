import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Stack, Typography } from "@mui/material";

type PostLikesProps = {
  postId: string;
};

export type Like = {
  userId: string;
};

const PostLikes = ({ postId }: PostLikesProps) => {
  const [likes, setLikes] = useState<Like[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const q = query(collection(db, "Posts", `${postId}`, "Likes"));
        const likesDocuments: Like[] = [];

        const likesSnapshot = await getDocs(q);
        likesSnapshot.forEach((like) =>
          likesDocuments.push(like.data() as Like)
        );

        if (!ignore) {
          setLikes(likesDocuments);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    };

    let ignore = false;
    fetchLikes();
    return () => {
      ignore = true;
    };
  }, [postId]);

  if (error) return <div>{error.message}</div>;

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
    >
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <Typography variant="h5">{likes.length}</Typography>
    </Stack>
  );
};

export default PostLikes;
