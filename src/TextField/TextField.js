import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  let labelName = null;
  let helperText = null;
  if (props.value.length > 5) {
    labelName = "Nice!!";
    helperText = "Text is long enough!";
  } else {
    labelName = "Error";
    helperText = "Text is short!!";
  }
  return (
    <form className={classes.root} autoComplete="off">
      {props.value.length > 5 ? (
        <TextField
          id="filled-basic"
          label={labelName}
          variant="filled"
          type="text"
          helperText={helperText}
          onChange={props.onChange}
          value={props.value}
        />
      ) : (
        <TextField
          error
          id="filled-basic"
          label={labelName}
          variant="filled"
          type="text"
          helperText={helperText}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    </form>
  );
}
