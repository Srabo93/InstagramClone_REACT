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

  function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <ImageList
      sx={{
        width: "80vw",
        height: "80vh",
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
      }}
      rowHeight={300}
      gap={1}
    >
      {docs.map((doc) => {
        const cols = doc.featured ? 2 : 1;
        const rows = doc.featured ? 2 : 1;

        return (
          <ImageListItem key={doc.id} cols={cols} rows={rows}>
            <img
              {...srcset(doc.url, 150, 100, rows, cols)}
              alt="random"
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title="delete"
              position="top"
              actionIcon={
                <IconButton color="primary" aria-label="label">
                  <DeleteForeverIcon fontSize="large" />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default UploadImgGrid;
