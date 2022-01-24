import React from "react";
import { Typography } from "@mui/material";
import ContainerWrapper from "../UI/ContainerWrapper";
import FlexBoxContainer from "../UI/FlexBoxContainer";
const Title = () => {
  return (
    <ContainerWrapper>
      <FlexBoxContainer>
        <Typography variant="h2" sx={{ letterSpacing: 6, textAlign: "center" }}>
          YOUR PICTURES
        </Typography>
        <Typography variant="h6" sx={{ letterSpacing: 3, textAlign: "center" }}>
          Share your Pictures with the World.
        </Typography>
      </FlexBoxContainer>
    </ContainerWrapper>
  );
};

export default Title;
