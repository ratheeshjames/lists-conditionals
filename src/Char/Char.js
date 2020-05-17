import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
function Char(props) {
  const cardStyle = {
    margin: "4px",
  };
  if (props.character === " " || props.character === "") {
    return null;
  } else {
    return (
      <Card style={cardStyle} onClick={props.onClick}>
        <ButtonBase>
          <CardContent>
            <Typography variant="h6">{props.character}</Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    );
  }
}
export default Char;
