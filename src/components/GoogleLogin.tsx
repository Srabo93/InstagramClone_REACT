import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Stack, Alert, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleLogin = () => {
  const [authError, setAuthError] = useState<Error | unknown>();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

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
      <Button onClick={signInWithGoogle} variant="contained">
        <GoogleIcon />
        <Typography>Google</Typography>
      </Button>
      {(authError as React.ReactNode) && (
        <Alert severity="error">{authError as React.ReactNode}</Alert>
      )}
    </Stack>
  );
};

export default GoogleLogin;
