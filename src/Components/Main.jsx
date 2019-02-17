import React, { Component } from "react";

import NavBar from "./NavBar";
import Calculator from "./Calculator/Calculator";

export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Calculator />
      </React.Fragment>
    );
  }
}

export default Main;
