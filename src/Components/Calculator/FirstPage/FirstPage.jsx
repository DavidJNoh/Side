import React, { Component } from "react";
import LoanInfo from "./LoanInfo";
import PurchaseInfo from "./PurchaseInfo";

export class FirstPage extends Component {
  render() {
    return (
      <React.Fragment>
        <PurchaseInfo
          handleInput={this.props.handleInput}
          values={this.props.values}
        />
        <LoanInfo
          handleInput={this.props.handleInput}
          values={this.props.values}
        />
      </React.Fragment>
    );
  }
}

export default FirstPage;
