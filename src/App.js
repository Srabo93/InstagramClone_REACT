/**
 * TODO Comment Codebase, Hide API KEY, develop Theme Provider
 * TODO add Framer Motion, Add Shadows
 */

import React from "react";
import { useState } from "react";
import Title from "./comps/Title/Title";
import UploadForm from "./comps/UploadForm/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
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
