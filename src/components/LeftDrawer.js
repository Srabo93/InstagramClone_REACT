import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LogoutIcon from "@mui/icons-material/Logout";

const SwipeableTemporaryDrawer = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const icons = [
    <AccountCircleIcon />,
    <FavoriteIcon />,
    <CloudUploadIcon />,
    <LogoutIcon />,
  ];
  const menu = ["Profile", "Favorites", "Upload", "Logout"];

  const list = (anchor) => (
    <Box role="presentation" onClick={toggleDrawer(anchor, false)}>
      <List>
        {menu.map((text, index) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/${text.toLowerCase()}`}
          >
            <ListItem button key={text}>
              <ListItemIcon>{icons[index] ?? icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            color="inherit"
            sx={{ fontStyle: "bold", letterSpacing: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            Menu
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
export default SwipeableTemporaryDrawer;
