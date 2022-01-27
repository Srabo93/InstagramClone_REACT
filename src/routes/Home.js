import React from "react";
import { useState, useContext } from "react";
import AuthContext from "../store/auth-context";
import Title from "../components/Title";
import UploadForm from "../components/UploadForm";
import ImageGridMasonry from "../components/ImageGridMasonry";
import Modal from "../components/Modal";
import ContainerWrapper from "../UI/ContainerWrapper";

const Home = () => {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const text = {
    h2: "Your Pictures",
    h6: "Share your Pictures with the World",
  };
  return (
    <ContainerWrapper>
      <Title text={text} />
      {isLoggedIn && <UploadForm />}
      <ImageGridMasonry onSetImg={setImgData} onSetBackdrop={setBackdrop} />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </ContainerWrapper>
  );
};

export default Home;
