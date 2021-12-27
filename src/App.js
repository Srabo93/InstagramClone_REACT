/**
 * TODO Comment Codebase, develop Dark mode toggle
 * TODO add Framer Motion
 */
import React from "react";
import { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import { Container } from "@mui/material";

function App() {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  return (
    <Container maxWidth="md">
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
