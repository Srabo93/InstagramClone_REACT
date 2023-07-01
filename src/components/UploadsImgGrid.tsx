import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  deleteObject,
  StorageReference,
} from "firebase/storage";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { db } from "../firebase";
import useAppStore from "../store";
import { PostData } from "./Post";

const UploadsImgGrid = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const currentUser = useAppStore((state) => state.user);
  const storage = getStorage();

  const deleteHandler = async (id: string, name: string) => {
    await deleteDoc(doc(db, "Posts", id));

    const desertRef: StorageReference = ref(
      storage,
      `Posts/${currentUser.email}/${name}`
    );
    await deleteObject(desertRef);
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "Posts"),
          where("user.uid", "==", currentUser.uid)
        ),
        (snapshot) => {
          const documents: PostData[] = [];
          snapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id } as PostData);
          });
          setPosts(documents);
        }
      ),
    [currentUser.uid]
  );

  return (
    <ImageList
      sx={{ maxWidth: "800px", maxHeight: "500px", my: 5 }}
      cols={4}
      rowHeight={164}
    >
      {posts.map((post) => (
        <ImageListItem key={post.id} sx={{ maxWidth: "md", maxHeight: 150 }}>
          <img
            style={{ maxWidth: 300, maxHeight: 150, cursor: "default" }}
            src={post.imageUrl}
            srcSet={post.imageUrl}
            alt="randomimg"
            loading="lazy"
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
                onClick={() => deleteHandler(post.id, post.fileName)}
              >
                <DeleteForeverIcon />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default UploadsImgGrid;
