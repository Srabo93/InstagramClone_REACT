import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import FlexBox from "../UI/FlexBox";
import { Typography } from "@mui/material";
const Title = () => {
  return (
    <ContainerWrapper>
      <FlexBox>
        <Typography
          variant="h2"
          sx={{ letterSpacing: 6, textAlign: "center", p: 1 }}
        >
          YOUR PICTURES
        </Typography>
        <Typography
          variant="h6"
          sx={{ letterSpacing: 3, textAlign: "center", p: 1 }}
        >
          Share your Pictures with the World.
        </Typography>
      </FlexBox>
    </ContainerWrapper>
  );
};

export default Title;
