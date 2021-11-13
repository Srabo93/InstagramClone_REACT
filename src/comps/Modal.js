import React from "react";

const Modal = ({ displaySetImg, onCloseBackdrop }) => {
  const onClickBackdrop = (event) => {
    if (event.target.classList.contains("backdrop")) {
      onCloseBackdrop(null);
    }
  };
  return (
    <div className="backdrop" onClick={onClickBackdrop}>
      <img src={displaySetImg} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
