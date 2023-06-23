import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import useAppStore from "../store";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const currentUser = useAppStore((state) => state.user);
  if (!currentUser || !currentUser.uid) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
