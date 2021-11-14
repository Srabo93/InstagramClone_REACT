import React from "react";
import useFirestore from "../hooks/useFirebase/useFirestore";
import classes from "./ImageGrid.module.css";
import { motion } from "framer-motion";

const ImageGrid = ({ selectImgData }) => {
  const { docs } = useFirestore("images");

  return (
    <div className={classes.img_grid}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className={classes.img_wrap}
            key={doc.id}
            onClick={() => selectImgData(doc)}
          >
            <motion.img
              src={doc.url}
              alt="firepic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
