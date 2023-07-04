import { Container } from "@mui/material";
import { ReactNode } from "react";

const PageWrapper = ({
  children,
  column,
}: {
  children: ReactNode;
  column?: boolean;
}) => {
  return (
    <>
      {column ? (
        <Container
          maxWidth="md"
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
          }}
        >
          {children}
        </Container>
      ) : (
        <Container
          maxWidth="md"
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            minHeight: "80vh",
          }}
        >
          {children}
        </Container>
      )}
      ;
    </>
  );
};
export default PageWrapper;
