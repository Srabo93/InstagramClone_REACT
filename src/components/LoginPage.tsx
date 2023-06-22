import { Box, Grid, Paper, Typography, Container, Stack } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import GithubLogin from "./GithubLogin";
import GoogleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";

const LoginPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Grid container component="main" sx={{ minHeight: "80vh" }}>
        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          component={Paper}
          elevation={6}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/featured/1200x600)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
