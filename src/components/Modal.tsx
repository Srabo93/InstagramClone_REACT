import { Backdrop } from "@mui/material";
import { Fade } from "@mui/material";
import { PostData } from "./Post";
import { MouseEvent } from "react";

const Modal = ({
  favorite,
  open,
  onSetBackdrop,
}: {
  favorite: PostData | null;
  open: boolean;
  onSetBackdrop: (arg: boolean) => void;
}) => {
  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("MuiBackdrop-root")) {
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
          src={favorite.imageUrl}
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
