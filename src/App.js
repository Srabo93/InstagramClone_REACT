/**
 * TODO Optimize Performance
 * TODO ADD SUBPAGES
 * TODO REFACTOR COLLECTION LOGIC WITH USERS
 * TODO IMPLEMENT TOKEN EXPIRES (refactor Login.js deleteHandler), DELETE PICTURE
 * TODO ADD PAGINATION
 * TODO Comment
 */
import React from "react";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./UI/themeContext";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Profile from "./routes/Profile";
import Favorites from "./routes/Favorites";
import Upload from "./routes/Upload";
import Login from "./routes/Login";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            {isLoggedIn && <Route path="profile" element={<Profile />} />}
            {isLoggedIn && <Route path="favorites" element={<Favorites />} />}
            {isLoggedIn && <Route path="uploads" element={<Upload />} />}
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
export default App;
