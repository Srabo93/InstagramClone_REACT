import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LogoutIcon from "@mui/icons-material/Logout";

type Anchor = "right";

export const DrawerMenu = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const icons = [
    <AccountCircleIcon />,
    <FavoriteIcon />,
    <CloudUploadIcon />,
    <LogoutIcon />,
  ];

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Profile", "Favorites", "Uploads", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link style={{ textDecoration: "none" }} to={`/${text}`}>
              <ListItemButton>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
            Menu
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
