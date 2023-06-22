import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Stack, Alert, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TwitterLogin = () => {
  const [authError, setAuthError] = useState<Error | unknown>();
  const twitterProvider = new TwitterAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const signInWithTwitter = async () => {
    try {
      await signInWithPopup(auth, twitterProvider);
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
      <Button onClick={signInWithTwitter} fullWidth variant="contained">
        <TwitterIcon />
        <Typography ml={1}>Twitter</Typography>
      </Button>
      {(authError as React.ReactNode) && (
        <Alert severity="error">{authError as React.ReactNode}</Alert>
      )}
    </Stack>
  );
};

export default TwitterLogin;
