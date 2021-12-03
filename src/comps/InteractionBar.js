import React from "react";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./InteractionBar.module.css";

const InteractionBar = () => {
  return (
    <div className={classes.bar}>
      <ul className={classes.actionList}>
        <li>
          <a>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faComment} size="lg" />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faShare} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InteractionBar;
