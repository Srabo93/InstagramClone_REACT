import React from "react";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../API/firebase";
import Title from "../Title";
import Modal from "../UI/Modal";
import FavoritesImgGrid from "../ImgGrids/FavoritesImgGrid";
import { Box } from "@mui/system";
import { useAuth } from "../../Auth/AuthContext";

const Favorites = () => {
  const [docs, setDocs] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const { currentUser } = useAuth();
  const text = {
    h2: "Check your Favorites",
  };
  useEffect(() => {
    onSnapshot(
      query(collection(db, `Favorites/${currentUser.uid}/Favorized`)),
      (snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      }
    );
  }, [currentUser.uid]);

  return (
    <Box>
      <Title text={text} />
      <FavoritesImgGrid
        docs={docs}
        onSetImg={setImgData}
        onSetBackdrop={setBackdrop}
      />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </Box>
  );
};

export default Favorites;
