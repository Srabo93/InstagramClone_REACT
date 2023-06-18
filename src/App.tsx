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
 * todo: create first prototype Page
 *        - add loading skeletons
 *        - adjust aria labesl
 * todo: complete website styling/components
 *        -build components with working data/statemanagement
 */
