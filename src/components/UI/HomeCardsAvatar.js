import React from "react";
import { Avatar } from "@mui/material";
const HomeCardsAvatar = ({ avatars, doc }) => {
  return (
    <React.Fragment>
      {avatars
        .filter((avatar) => avatar.name === doc.createdByUser)
        .map((filteredAvatar) => (
          <Avatar src={filteredAvatar.img} key={filteredAvatar.name} />
        ))}
    </React.Fragment>
  );
};

export default HomeCardsAvatar;
