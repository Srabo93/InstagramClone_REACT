import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../Auth/AuthContext";
import { db } from "../API/firebase";

const UploadProfileImg = () => {
  const [file, setFile] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (file === null) {
      return;
    }
    const storage = getStorage();
    const userImgref = ref(
      storage,
      `Users/ProfilePicture_${currentUser.email}/${file.name}`
    );

    uploadBytesResumable(userImgref, file);
    const uploadImages = uploadBytesResumable(userImgref, file);

    uploadImages.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await getDownloadURL(uploadImages.snapshot.ref);
        await updateDoc(doc(db, "Users", currentUser.uid), {
          img: url,
        });
      }
    );
  }, [file, currentUser.uid, currentUser.email]);

  const Input = styled("input")({
    display: "none",
  });

  const types = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };
  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={onChangeHandler}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </form>
    </Box>
  );
};

export default UploadProfileImg;
