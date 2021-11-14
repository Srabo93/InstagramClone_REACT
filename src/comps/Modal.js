import React from "react";
import classes from "./Modal.module.css";
//FireStore
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
//Storage
import { getStorage, ref, deleteObject } from "firebase/storage";

const Modal = ({ displayImg, onCloseBackdrop }) => {
  const onClickBackdrop = (event) => {
    if (event.target.classList.contains("Modal_backdrop__1RPMV")) {
      onCloseBackdrop(null);
    }
  };

  const deleteHanlder = () => {
    //Firestore
    deleteDoc(doc(db, "images", displayImg.id));
    //Storage
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
    <div className={classes.backdrop} onClick={onClickBackdrop}>
      <img src={displayImg.url} alt="enlarged pic" />
      <button className="buttons" onClick={deleteHanlder}>
        Delete
      </button>
    </div>
  );
};

export default Modal;
