import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

function Char(props) {
  const cardStyle = {
    margin: "4px",
    width: "100%",
  };
  const buttonStyle = {
    display: "flex",
    flexDirection: "row-reverse",
  }
  const textStyle = {
    display: "flex",
    justifyContent: "flex-start",
  }
  if (props.character === " " || props.character === "") {
    return null;
  } else {
    return (
      <Card style={cardStyle} onClick={props.onClick}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={8} style = {textStyle}>
              <Typography variant="h6" >{props.character}</Typography>
            </Grid>
            <Grid item xs={4} style = {buttonStyle}>
              <IconButton
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
export default Char;
