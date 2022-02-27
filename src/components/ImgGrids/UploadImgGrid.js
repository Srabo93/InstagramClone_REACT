import React from "react";
import { useAuth } from "../../Auth/AuthContext";
import useFirestore from "../../hooks/useFirestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const UploadImgGrid = () => {
  const { currentUser } = useAuth();
  const { docs } = useFirestore(`Users`, currentUser.email);

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
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default UploadImgGrid;
