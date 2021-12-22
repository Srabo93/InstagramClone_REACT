import React from "react";
import { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid onSetImg={setImgData} onSetBackdrop={setBackdrop} />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </div>
  );
}

export default App;
