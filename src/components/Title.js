import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Title = (props) => {
  const { h2, h6 } = props.text;
  return (
    <ContainerWrapper>
      <Box>
        <Typography
          variant="h2"
          sx={{ letterSpacing: 6, textAlign: "center", pb: 1 }}
        >
          {h2}
        </Typography>
        <Typography
          variant="h6"
          sx={{ letterSpacing: 3, textAlign: "center", pb: 1 }}
        >
          {h6}
        </Typography>
      </Box>
    </ContainerWrapper>
  );
};

export default Title;
