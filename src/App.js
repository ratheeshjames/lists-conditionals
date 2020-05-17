import React from "react";
import "./App.css";
import ButtonAppBar from "./Appbar/Appbar";
import BasicTextFields from "./TextField/TextField";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import Char from "./Char/Char";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.deleteCharHandler = this.deleteCharHandler.bind(this);
    this.state = {
      userInput: "",
    };
  }
  inputChangeHandler(event) {
    this.setState({ userInput: event.target.value });
  }
  deleteCharHandler(index) {
    const text = this.state.userInput.split("");
    let updatedText = text.join("");
    text.splice(index, 1);
    updatedText = text.join("");
    setTimeout(
      function () {
        this.setState({ userInput: updatedText });
      }.bind(this),
      500
    );
  }

  render() {
    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    };
    const cardStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      margin: "8px",
    };
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          onClick={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div>
        <ButtonAppBar />
        <Container style={containerStyle} m={1}>
          <Box component="span" m={1}>
            <BasicTextFields
              onChange={this.inputChangeHandler}
              value={this.state.userInput}
            />
          </Box>
          <Box m={1}>
            <Typography variant="body1">{this.state.userInput}</Typography>
          </Box>
          <Box m={1}>
            <ValidationComponent inputLength={this.state.userInput.length} />
          </Box>
          <div>
            {this.state.userInput !== "" ? (
              <Typography variant="body1">
                Select the Character to delete:{" "}
              </Typography>
            ) : null}
          </div>
          <div style={cardStyle}>{charList}</div>
        </Container>
      </div>
    );
  }
}
export default App;
