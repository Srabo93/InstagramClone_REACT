import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import LeftDrawer from "./LeftDrawer";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
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
          {isLoggedIn && <LeftDrawer />}
          {!isLoggedIn && (
            <Button
              color="inherit"
              sx={{ fontStyle: "bold", letterSpacing: 2 }}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Navigation;
