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
    bg: {
      dark: "#388e3c",
      light: "#e3f2fd",
    },
  },
  typography: {
    fontFamily: ["Noto"].join(","),
  },
});

export const darkTheme = createTheme({});
