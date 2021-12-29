import React from "react";
import CameraIcon from "@mui/icons-material/Camera";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, flexWrap: "wrap", minWidth: "sm" }}>
      <AppBar position="fixed">
        <Toolbar>
          <CameraIcon color="secondary" fontSize="large" sx={{ mr: 2 }} />
          <Typography
            variant="h5"
            component="div"
            color="secondary"
            sx={{ flexGrow: 1, letterSpacing: 5 }}
          >
            PhotoGallery
          </Typography>
          <Button
            variant="text"
            sx={{ fontWeight: "bold", letterSpacing: 2 }}
            color="secondary"
          >
            Login
          </Button>
          <Button
            variant="text"
            sx={{ fontWeight: "bold", letterSpacing: 2 }}
            color="secondary"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
