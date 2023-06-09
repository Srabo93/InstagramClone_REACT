import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#d01173",
    },
    secondary: {
      main: "#9e979a",
    },
    error: {
      main: "rgba(230,11,16,0.91)",
    },
    success: {
      main: "rgba(76,175,80,0.9)",
    },
  },
  typography: {
    fontFamily: "Noto Serif",
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 4,
  },
});
