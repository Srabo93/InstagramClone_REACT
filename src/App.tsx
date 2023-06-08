import Navigation from "./components/Navigation";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./themeContext";
import { db } from "./firebase";
import { useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";

const App = () => {
  useEffect(() => {
    const getAllDocs = async () => {
      const queryAllDocs = query(collection(db, "Uploads"));
      const allDocs = await getDocs(queryAllDocs);
      console.log(allDocs);
    };
    getAllDocs();
  }, []);
  return (
    <ThemeProvider theme={themeOptions}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
/**
 * todo: configure firebase and call backenddata / maybe rework how the BaaS works, not the best right now
 *        -make firebase communicate with app
 *        -fetch datasets
 * todo: configure StateManagement
 *        -workout State and slices for backenddata
 * todo: complete website styling/components
 *        -build components with working data/statemanagement
 */
