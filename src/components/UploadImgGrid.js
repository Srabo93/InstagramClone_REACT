import React from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import useFirestore from "../hooks/useFirestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadImgGrid = ({ context }) => {
  const { user } = useContext(AuthContext);
  const queryString =
    context === "favourites"
      ? `iusers/${user}/favourites`
      : `users/${user}/uploads`;
  const { docs } = useFirestore(`users/${user}/uploads`);

  return (
    <ImageList
      sx={{ maxWidth: "800px", maxHeight: "300px", mb: 5 }}
      cols={4}
      rowHeight={164}
    >
      {docs.map((doc) => (
        <ImageListItem key={doc.id} sx={{ maxWidth: "md", maxHeight: 100 }}>
          <img
            style={{ maxWidth: 200, maxHeight: 100, cursor: "default" }}
            src={doc.url}
            srcSet={doc.url}
            alt="randomimg"
            loading="lazy"
            sx={{ pt: 1 }}
          />
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
            position="top"
            actionIcon={
              <IconButton color="primary" aria-label="label">
                <DeleteForeverIcon fontSize="large" />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default UploadImgGrid;
