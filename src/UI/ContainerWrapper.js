import React from "react";
import { Container } from "@mui/material";

const ContainerWrapper = (props) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 10 }}>
      {props.children}
    </Container>
  );
};

export default ContainerWrapper;
