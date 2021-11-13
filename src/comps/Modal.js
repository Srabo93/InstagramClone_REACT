import React from "react";

const Modal = ({ displaySetImg, onCloseBackdrop }) => {
  const onClickBackdrop = (event) => {
    if (event.target.classList.contains("backdrop")) {
      onCloseBackdrop(null);
    }
  };
  const onDeleteButton = (event) => {
    console.log(event.target.previousSibling);
    console.log(displaySetImg);
  };
  return (
    <div className="backdrop" onClick={onClickBackdrop}>
      <img src={displaySetImg} alt="enlarged pic" />
      <button className="buttons" onClick={onDeleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Modal;
