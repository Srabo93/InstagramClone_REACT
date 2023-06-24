import Navigation from "./components/Navigation";
import { ThemeProvider } from "@emotion/react";
import { themeOptions, MainContainer } from "./themeContext";
import useAuth, { AuthUser } from "./hooks/useAuth";
import useAppStore from "./store";
import { useEffect } from "react";

const App = () => {
  const [authUser] = useAuth();
  const { updateUser } = useAppStore();
  useEffect(() => {
    if (authUser) {
      updateUser(authUser as AuthUser);
    }
  }, [authUser, updateUser]);

  return (
    <ThemeProvider theme={themeOptions}>
      <MainContainer>
        <Navigation />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
/**
 * TODO: create first prototype Page
 *        - add loading skeletons
 *        - add like functionality
 *        - refactor components/logic into reusable parts/hooks
 * TODO: complete website styling/components
 *        -add Profile Page
 *
 WARNING: Fix date display issue, maybe useMemo and mutating recieving data to prevent render issues
 */
