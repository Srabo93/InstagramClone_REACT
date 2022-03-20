import React from "react";
import { Backdrop } from "@mui/material";
import { Fade } from "@mui/material";

const Modal = ({ imgDocs, open, onSetBackdrop }) => {
  const handleClose = (event) => {
    if (event.target.classList.contains("MuiBackdrop-root")) {
      onSetBackdrop(false);
    }
  };
  return (
    <Fade in={open}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={imgDocs.img}
          style={{
            maxHeight: "80%",
            maxWidth: "60%",
            boxShadow: "3px 5px 7px rgba(255,255,255, 0.3)",
            borderRadius: "5px",
            opacity: "1",
            cursor: "inherit",
          }}
          alt="randomimg"
        />
      </Backdrop>
    </Fade>
  );
};

export default Modal;
