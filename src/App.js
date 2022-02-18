/**
 * TODO UPLOAD ALERTS FUNCTIONALITY
 * TODO ADD LIKE FUNCTIONALITY
 * TODO Comment
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./UI/themeContext";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Profile from "./routes/Profile";
import Favorites from "./routes/Favorites";
import Uploads from "./routes/Uploads";
import Login from "./routes/Login";
import ForgotPassword from "./routes/ForgotPassword";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="favorites"
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path="uploads"
              element={
                <PrivateRoute>
                  <Uploads />
                </PrivateRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
export default App;
