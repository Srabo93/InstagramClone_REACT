import Navigation from "./components/Navigation";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./themeContext";
import useAuth from "./hooks/useAuth";
import useAppStore from "./store";
import { useEffect } from "react";

type AuthUser = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  createdAt: string;
};
const App = () => {
  const [authUser] = useAuth();
  const { updateUser } = useAppStore();
  useEffect(() => {
    if (authUser) {
      updateUser(authUser as AuthUser);
    }
  }, []);

  return (
    <ThemeProvider theme={themeOptions}>
      <div style={{ background: "url('../public/background.png')" }}>
        <Navigation />
      </div>
    </ThemeProvider>
  );
};

export default App;
/**
 * TODO: create first prototype Page
 *        - add loading skeletons
 *        - refactor multiple use of types
 *        - refactor components/logic into reusable parts/hooks
 * TODO: complete website styling/components
 *        -build components with working data/statemanagement
 */
