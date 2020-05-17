import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "../App";

function Theme() {
  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  let theme = null;
  // Theming Section BEGIN {{{
  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      type: prefersDarkTheme ? "dark" : "light",
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
      type: prefersDarkTheme ? "dark" : "light",
    },
  });
  if (prefersDarkTheme) {
    theme = darkTheme;
  } else {
    theme = lightTheme;
  }
  // }}} Theming Section END

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
  );
}
export default Theme;
