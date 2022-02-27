import React, { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import LoadingCircle from "../UI/LoadingCircle";
import { Alert } from "@mui/material";
import { Button, TextField } from "@mui/material";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      setError("");
      await resetPassword(email);
      setMessage("Please Checkout your Email Inbox");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const errorMessage = err.message;
      setError(errorMessage);
    }
  };
  return (
    <Container maxWidth="sm">
      {error && (
        <Alert variant="outline" severity="error">
          {error}
        </Alert>
      )}
      {message && (
        <Alert variant="outline" severity="info">
          {message}
        </Alert>
      )}
      <Box sx={{ mt: 1 }}>
        {isLoading && <LoadingCircle />}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={emailHandler}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Reset Password
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
