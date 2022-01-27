import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import FlexBox from "../UI/FlexBox";
import { Typography } from "@mui/material";

const Title = (props) => {
  const { h2, h6 } = props.text;
  return (
    <ContainerWrapper>
      <FlexBox>
        <Typography
          variant="h2"
          sx={{ letterSpacing: 6, textAlign: "center", p: 1 }}
        >
          {h2}
        </Typography>
        <Typography
          variant="h6"
          sx={{ letterSpacing: 3, textAlign: "center", p: 1 }}
        >
          {h6}
        </Typography>
      </FlexBox>
    </ContainerWrapper>
  );
};

export default Title;
