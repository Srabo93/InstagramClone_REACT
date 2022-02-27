import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./components/UI/themeContext";
import Home from "./components/routes/Home";
import Navigation from "./components/Navigation";
import Profile from "./components/routes/Profile";
import Favorites from "./components/routes/Favorites";
import Uploads from "./components/routes/Uploads";
import Login from "./components/routes/Login";
import ForgotPassword from "./components/routes/ForgotPassword";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="md" sx={{ mt: 10 }}>
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
