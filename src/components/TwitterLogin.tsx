import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Stack, Alert, Button, Typography } from "@mui/material";

const TwitterLogin = () => {
  const [authError, setAuthError] = useState<Error | unknown>();
  const twitterProvider = new TwitterAuthProvider();
  const auth = getAuth();

  const signInWithTwitter = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider);

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
      <Button onClick={signInWithTwitter} fullWidth variant="contained">
        <TwitterIcon />
        <Typography>Twitter</Typography>
      </Button>
      {(authError as React.ReactNode) && (
        <Alert severity="error">{authError as React.ReactNode}</Alert>
      )}
    </Stack>
  );
};

export default TwitterLogin;
