import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,    
  },
  offset: theme.mixins.toolbar,
}));

export default function ButtonAppBar() {
  const prefersAppDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  let barTheme = null;
  // Theming Section BEGIN {{{
  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      type: prefersAppDarkTheme ? "dark" : "light",
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#424242",
      },
      secondary: {
        main: "#f48fb1",
      },
      type: prefersAppDarkTheme ? "dark" : "light",
    },
  });
  if (prefersAppDarkTheme) {
    barTheme = darkTheme;
  } else {
    barTheme = lightTheme;
  }
  // }}} Theming Section END
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={barTheme}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Lists and Conditionals
            </Typography>
            <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
          </Toolbar>
        </AppBar>        
        <div className={classes.offset} />
      </ThemeProvider>
    </div>
  );
}
