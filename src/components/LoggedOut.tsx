import { ReactNode } from "react";
import useAppStore from "../store";

const LoggedOut = ({ children }: { children: ReactNode }) => {
  const currentUser = useAppStore((state) => state.user);
  if (!currentUser.uid) {
    return children;
  }
  return null;
};

export default LoggedOut;
