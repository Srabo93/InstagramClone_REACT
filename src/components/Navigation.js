import React from "react";
import { Outlet } from "react-router-dom";
import CameraIcon from "@mui/icons-material/Camera";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import LeftDrawer from "./LeftDrawer";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, flexWrap: "wrap", minWidth: "sm" }}>
      <AppBar position="fixed">
        <Toolbar>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, letterSpacing: 5 }}
          >
            PhotoGallery
          </Typography>
          <LeftDrawer />
          <Button color="inherit" sx={{ fontStyle: "bold", letterSpacing: 2 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Navigation;
