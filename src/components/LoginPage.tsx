import { Box, Paper, Typography, Container, Stack } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import GithubLogin from "./GithubLogin";
import GoogleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";

const LoginPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Box
        component={Paper}
        sx={{
          my: 8,
          mx: 4,
          py: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "80vh",
          maxWidth: "100vw",
        }}
      >
        <LoginOutlined color="primary" fontSize="large" />
        <Typography margin={3} component="h1" variant="h5">
          Login with
        </Typography>
        <Stack spacing={3} minWidth="200px">
          <GoogleLogin />
          <TwitterLogin />
          <GithubLogin />
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
