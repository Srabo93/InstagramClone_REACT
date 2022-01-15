import React from "react";
import { Box } from "@mui/system";
const FlexBoxContainer = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Box>
  );
};

export default FlexBoxContainer;
