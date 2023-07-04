import { Box, Paper, Typography, Stack } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import GithubLogin from "./GithubLogin";
import GoogleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";
import PageWrapper from "./PageWrapper";

const LoginPage = () => {
  return (
    <PageWrapper>
      <Box
        component={Paper}
        sx={{
          my: 2,
          mx: 4,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxHeight: "80vh",
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
    </PageWrapper>
  );
};

export default LoginPage;
