import React from "react";
import { Outlet, Link } from "react-router-dom";
import LeftDrawer from "./LeftDrawer";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";

/**
 *TODO Maybe rework the Router links into reusable UI components
 *
 */
const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, flexWrap: "wrap", minWidth: "sm" }}>
      <AppBar position="fixed">
        <Toolbar>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography
            color="inherit"
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              letterSpacing: 5,
            }}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              PhotoGallery
            </Link>
          </Typography>
          <LeftDrawer />
          <Button color="inherit" sx={{ fontStyle: "bold", letterSpacing: 2 }}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/login"
            >
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Navigation;
