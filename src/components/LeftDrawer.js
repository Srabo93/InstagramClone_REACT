import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
/**
 * TODO refactor the 'toggleDrawer' func into right side {optional disable the close on menue click}
 * TODO refactor the JSX apropiate to the display of the right side
 * TODO adjust the Code to the Display needed
 */
const SwipeableTemporaryDrawer = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box role="presentation" onClick={toggleDrawer(anchor, false)}>
      <List>
        {["Profile", "Favorites", "Upload", "Logout"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
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
