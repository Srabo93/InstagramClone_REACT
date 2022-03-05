import React from "react";
import { useAuth } from "../../Auth/AuthContext";
import useFirestore from "../../hooks/useFirestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadImgGrid = () => {
  const { currentUser } = useAuth();
  const { docs } = useFirestore(`Uploads`, currentUser.email);

  return (
    <ImageList
      sx={{ maxWidth: "800px", maxHeight: "500px", mb: 5 }}
      cols={4}
      rowHeight={164}
    >
      {docs.map((doc) => (
        <ImageListItem key={doc.id} sx={{ maxWidth: "md", maxHeight: 150 }}>
          <img
            style={{ maxWidth: 300, maxHeight: 150, cursor: "default" }}
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
              <IconButton sx={{ color: "white" }}>
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

export default UploadImgGrid;
