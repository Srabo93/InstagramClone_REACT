import { Box, Typography } from "@mui/material";
import { ErrorResponse } from "@remix-run/router";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  if (error instanceof ErrorResponse) {
    return (
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          maxWidth: "40vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px auto",
        }}
      >
        <Typography variant="h2">Oops!</Typography>
        <Typography variant="body1">{error.data}</Typography>
        <Typography variant="body2">{error.statusText}</Typography>
        <Typography variant="caption">{error.status}</Typography>
      </Box>
    );
  }
  if (error instanceof Error) {
    return (
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          maxWidth: "40vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px auto",
        }}
      >
        <Typography variant="h2">Oops!</Typography>
        <Typography variant="body1">{error.message}</Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Typography variant="h2">Oops!</Typography>
      <Typography variant="body1">
        Sorry, an unexpected error has occured.
      </Typography>
    </Box>
  );
};

export default ErrorPage;
