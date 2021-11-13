import React from "react";

const Modal = ({ displaySetImg, closeBackdrop }) => {
  const onClickBackdrop = (event) => {
    if (event.target.classList.contains("backdrop")) {
      closeBackdrop(null);
    }
  };
  return (
    <div className="backdrop" onClick={onClickBackdrop}>
      <img src={displaySetImg} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
