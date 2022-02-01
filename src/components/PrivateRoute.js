import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  let location = useLocation();
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
