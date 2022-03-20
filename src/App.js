import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./components/UI/themeContext";
import Home from "./components/routes/Home";
import Navigation from "./components/Navigation";
import Login from "./components/routes/Login";
import ForgotPassword from "./components/routes/ForgotPassword";
import CircularProgress from "@mui/material/CircularProgress";

const Profile = React.lazy(() => import("./components/routes/Profile"));
const Favorites = React.lazy(() => import("./components/routes/Favorites"));
const Uploads = React.lazy(() => import("./components/routes/Uploads"));
const ProfileUpdate = React.lazy(() =>
  import("./components/routes/ProfileUpdate")
);
function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Suspense fallback={<CircularProgress />}>
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
                path="profile/updateprofile"
                element={
                  <PrivateRoute>
                    <ProfileUpdate />
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
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}
export default App;
