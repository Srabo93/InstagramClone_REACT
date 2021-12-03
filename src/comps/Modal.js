import React from "react";
import classes from "./Modal.module.css";
import { motion } from "framer-motion";
import InteractionBar from "./InteractionBar";

const Modal = ({ displayImg, onCloseBackdrop }) => {
  const onClickBackdrop = (event) => {
    if (event.target.classList.contains("Modal_backdrop__1DLHX")) {
      onCloseBackdrop(null);
    }
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
      <InteractionBar />
    </motion.div>
  );
};

export default Modal;
