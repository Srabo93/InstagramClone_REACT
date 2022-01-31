/**
 * TODO ADD SUBPAGES
 * TODO IMPLEMENT BASIC CRUD LOGIC, REFACTOR
 * TODO ADD LIKE FUNCTIONALITY
 * TODO IMPLEMENT RESET PASSWORD
 * TODO ADD PAGINATION
 * TODO Comment
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/auth/useAuth";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./UI/themeContext";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Profile from "./routes/Profile";
import Favorites from "./routes/Favorites";
import Uploads from "./routes/Uploads";
import Login from "./routes/Login";

function App() {
  const { user } = useAuth();

  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            {user && <Route path="profile" element={<Profile />} />}
            {user && <Route path="favorites" element={<Favorites />} />}
            {user && <Route path="uploads" element={<Uploads />} />}
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
export default App;
