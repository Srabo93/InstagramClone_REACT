import React from "react";
import CameraIcon from "@mui/icons-material/Camera";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Title = () => {
  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h5" color="primary">
        PhotoGallery <CameraIcon color="primary" fontSize="large" />
      </Typography>
      <Box sx={{ textAlign: "center", padding: 6 }}>
        <Typography variant="h3" sx={{ letterSpacing: 6 }}>
          Your Pictures
        </Typography>
        <Typography variant="overline">
          Share your Pictures with the World.
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
