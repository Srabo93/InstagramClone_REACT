import React from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import useUserUploads from "../hooks/useUserUploads";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadImgGrid = () => {
  const { user } = useContext(AuthContext);
  const { docs } = useUserUploads(`images/user/${user}`);

  return (
    <ImageList
      sx={{ maxWidth: "70vw", maxHeight: "80vh", p: 3 }}
      cols={4}
      rowHeight={164}
    >
      {docs.map((doc) => (
        <ImageListItem key={doc.id}>
          <img
            style={{ width: 200, height: 100, cursor: "default" }}
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
