import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
const Title = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: "center", padding: 6 }}>
        <Typography variant="h2" sx={{ letterSpacing: 6 }}>
          YOUR PICTURES
        </Typography>
        <Typography variant="h6" sx={{ letterSpacing: 3 }}>
          Share your Pictures with the World.
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
