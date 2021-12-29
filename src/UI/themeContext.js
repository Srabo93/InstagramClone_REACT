import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#efb6b2",
    },
    secondary: {
      main: "#4e4e4e",
    },
    error: {
      main: "#ff4a4a",
    },
  },
  typography: {
    fontFamily: ["Noto"].join(","),
  },
});
