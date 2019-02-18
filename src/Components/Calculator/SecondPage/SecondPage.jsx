import React, { Component } from "react";

import Income from "./Income";
import FixedExpenses from "./FixedExpenses";
import VariableExpenses from "./VariableExpenses";
import FutureAssumptions from "./FutureAssumptions";

export class SecondPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Income
          handleInput={this.props.handleInput}
          values={this.props.values}
        />
        <FixedExpenses
          handleInput={this.props.handleInput}
          values={this.props.values}
        />
        <VariableExpenses
          handleInput={this.props.handleInput}
          values={this.props.values}
        />
        <FutureAssumptions
          handleInput={this.props.handleInput}
          values={this.props.values}
        />
      </React.Fragment>
    );
  }
}

export default SecondPage;
