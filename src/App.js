/**
 * *UPLOAD DOESENT WORK INCLUDING FEEDBACK
 * TODO Animations ?
 * TODO Remove Action !
 * TODO Optimize Performance
 * TODO Comment
 */
import React from "react";
import { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import { Container } from "@mui/material";

function App() {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  return (
    <Container maxWidth="md">
      <Navigation />
      <Title />
      <UploadForm />
      <ImageGrid onSetImg={setImgData} onSetBackdrop={setBackdrop} />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </Container>
  );
}

export default App;
