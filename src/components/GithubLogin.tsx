import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Alert, Button, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GithubLogin = () => {
  const [authError, setAuthError] = useState<Error | unknown>();
  const navigate = useNavigate();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();

  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/");
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
