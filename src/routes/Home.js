import React from "react";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import Title from "../components/Title";
import UploadForm from "../components/UploadForm";
import ImageGridMasonry from "../components/ImageGridMasonry";
import Modal from "../components/Modal";
import ContainerWrapper from "../UI/ContainerWrapper";

const Home = () => {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const { currentUser } = useAuth();
  const text = {
    h2: "Your Pictures",
    h6: "Share your Pictures with the World",
  };
  return (
    <ContainerWrapper>
      <Title text={text} />
      {currentUser && <UploadForm />}
      <ImageGridMasonry onSetImg={setImgData} onSetBackdrop={setBackdrop} />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </ContainerWrapper>
  );
};

export default Home;
