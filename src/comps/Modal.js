import React from "react";
//FireStore
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
//Storage
import { getStorage, ref, deleteObject } from "firebase/storage";

const Modal = ({ displayImg, onCloseBackdrop }) => {
  const onClickBackdrop = (event) => {
    if (event.target.classList.contains("backdrop")) {
      onCloseBackdrop(null);
    }
  };

  const deleteHanlder = () => {
    //Firestore
    console.log(displayImg.createdAt);
    deleteDoc(doc(db, "images", displayImg.id));
    //Storage
    console.log(displayImg.url);
    const storage = getStorage();

    const desertRef = ref(storage, displayImg.url);

    deleteObject(desertRef)
      .then(() => {
        console.log("storage deletion success");
      })
      .catch((error) => {
        console.log("deletion failed");
      });
    onCloseBackdrop(null);
  };
  return (
    <div className="backdrop" onClick={onClickBackdrop}>
      <img src={displayImg.url} alt="enlarged pic" />
      <button className="buttons" onClick={deleteHanlder}>
        Delete
      </button>
    </div>
  );
};

export default Modal;
