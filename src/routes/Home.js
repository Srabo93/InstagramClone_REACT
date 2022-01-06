import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";

const Home = () => {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  return (
    <React.Fragment>
      <Title />
      <UploadForm />
      <ImageGrid onSetImg={setImgData} onSetBackdrop={setBackdrop} />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </React.Fragment>
  );
};

export default Home;
