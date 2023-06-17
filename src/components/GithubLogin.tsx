import React, { useState } from "react";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Alert, Button, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GithubLogin = () => {
  const [authError, setAuthError] = useState<Error | unknown>();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);

      const user = result.user;
      console.log(user);
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      }
    }
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button onClick={signInWithGithub} variant="contained">
        <GitHubIcon />
        <Typography ml={1}>Github</Typography>
      </Button>
      {(authError as React.ReactNode) && (
        <Alert severity="error">{authError as React.ReactNode}</Alert>
      )}
    </Stack>
  );
};

export default GithubLogin;
