import Navigation from "./components/Navigation";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./themeContext";

const App = () => {
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
 *        - adjust aria labesl
 * TODO: complete website styling/components
 *        -build components with working data/statemanagement
 */
