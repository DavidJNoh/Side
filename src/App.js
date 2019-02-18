import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

import Main from "./Components/Main";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
    // type: "dark"
  },
  status: {
    danger: "orange"
  },
  spacing: {
    unit: 10
  },
  typography: {
    fontFamily: "Source Sans Pro"
  }
});

console.log("Theme", theme);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
