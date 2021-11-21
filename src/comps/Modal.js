import React from "react";
import classes from "./Modal.module.css";
//FireStore
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
//Storage
import { getStorage, ref, deleteObject } from "firebase/storage";
import { motion } from "framer-motion";

const Modal = ({ displayImg, onCloseBackdrop }) => {
  const onClickBackdrop = (event) => {
    if (event.target.classList.contains("Modal_backdrop__1RPMV")) {
      onCloseBackdrop(null);
    }
  };

  const deleteHanlder = () => {
    deleteDoc(doc(db, "images", displayImg.id));

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes.backdrop}
      onClick={onClickBackdrop}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={displayImg.url}
        alt="enlarged pic"
      />
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="buttons"
        onClick={deleteHanlder}
      >
        Delete
      </motion.button>
    </motion.div>
  );
};

export default Modal;
