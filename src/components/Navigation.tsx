import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { DrawerMenu } from "./DrawerMenu";
import { Link, Outlet } from "react-router-dom";
import CameraIcon from "@mui/icons-material/Camera";

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
            sx={{ flexGrow: 1, letterSpacing: 5 }}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              PhotoGallery
            </Link>
          </Typography>
          <DrawerMenu />
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Navigation;
