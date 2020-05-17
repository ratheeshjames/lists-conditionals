import React from "react";
import Typography from "@material-ui/core/Typography";

const Validation = (props) => {
  return (
    <div>
      {props.inputLength > 5 ? (
        <Typography variant="body2" color="textSecondary">
          Text is long enough!
        </Typography>
      ) : (
        <Typography variant="body2" color="textSecondary">
          Text is short!!
        </Typography>
      )}
    </div>
  );
};
export default Validation;
