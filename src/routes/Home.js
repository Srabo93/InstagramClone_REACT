import React from "react";
import { useState } from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import Modal from "../components/Modal";
import Title from "../components/Title";
import HomeCards from "../UI/HomeCards";

const Home = () => {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  const text = {
    h2: "Your Pictures",
    h6: "Share your Pictures with the World",
  };
  return (
    <ContainerWrapper>
      <Title text={text} />
      <HomeCards
        onSetImg={setImgData}
        onSetBackdrop={setBackdrop}
        store={"All_Images"}
      />
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </ContainerWrapper>
  );
};

export default Home;
