import Navigation from "./components/Navigation";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./themeContext";

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
/**
 * todo: create first prototype Page
 *        - add User in State query for Avatar
 *        - work out if you can make zustand handle firebase actions instead useEffect
 * todo: complete website styling/components
 *        -build components with working data/statemanagement
 */
