import React from "react";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./InteractionBar.module.css";

const InteractionBar = () => {
  return (
    <div className={classes.bar}>
      <ul className={classes.actionList}>
        <li>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} size="lg" />
        </li>
        <li>
          <FontAwesomeIcon icon={faShare} size="lg" />
        </li>
      </ul>
    </div>
  );
};

export default InteractionBar;
