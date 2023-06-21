import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import ProfilePage from "./components/ProfilePage.tsx";
import UploadsPage from "./components/UploadsPage.tsx";
import FavoritesPage from "./components/FavoritesPage.tsx";
import HomePage from "./components/HomePage.tsx";
import LoginPage from "./components/LoginPage.tsx";
import RegisterPage from "./components/RegisterPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/profile",
        element: <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>,
      },
      {
        path: "/uploads",
        element: <UploadsPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
