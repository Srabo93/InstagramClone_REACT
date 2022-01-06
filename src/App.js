/**
 * TODO Optimize Performance
 * TODO ADD SUBPAGES / ADD ROUTER
 * TODO IMPLEMENT LOG IN / SIGN UP / ADD USECONTEXT
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
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./UI/themeContext";

function App() {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="md">
        <Navigation />
        <Title />
        <UploadForm />
        <ImageGrid onSetImg={setImgData} onSetBackdrop={setBackdrop} />
        {backdrop && (
          <Modal
            imgDocs={imgData}
            open={backdrop}
            onSetBackdrop={setBackdrop}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
