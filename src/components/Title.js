import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Title = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: "center", padding: 6 }}>
        <Typography variant="h3" color="secondary" sx={{ letterSpacing: 6 }}>
          YOUR PICTURES
        </Typography>
        <Typography color="secondary" variant="subtitle">
          Share your Pictures with the World.
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
