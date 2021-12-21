import React from "react";
import classes from "./InteractionBar.module.css";

const InteractionBar = () => {
  return (
    <div className={classes.bar}>
      <ul className={classes.actionList}>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
    </div>
  );
};

export default InteractionBar;
