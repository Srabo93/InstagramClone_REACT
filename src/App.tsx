import React from "react";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./themeContext";
import useAppStore from "./store";
import { faker } from "@faker-js/faker";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../src/firebase";

const App = () => {
  const { getAllPosts } = useAppStore();
  // React.useEffect(() => {
  //   (async () => {
  //     getAllPosts();
  //     return () => getAllPosts;
  //   })();
  // }, []);

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
 *        - call state globally on App start?
 *        - add snapshot listener and see how it works with the state
 * todo: complete website styling/components
 *        -build components with working data/statemanagement
 */
