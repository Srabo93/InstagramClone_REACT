import { ReactNode } from "react";
import useAppStore from "../store";

const LoggedIn = ({ children }: { children: ReactNode }) => {
  const currentUser = useAppStore((state) => state.user);
  if (!currentUser.uid) {
    return null;
  }
  return children;
};

export default LoggedIn;
