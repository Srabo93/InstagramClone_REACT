import React from "react";
import { Container } from "@mui/material";

const ContainerWrapper = (props) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      {props.children}
    </Container>
  );
};

export default ContainerWrapper;
