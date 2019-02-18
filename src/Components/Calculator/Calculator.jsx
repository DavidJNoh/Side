import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ButtonNav from "./ButtonNav";

const styles = theme => ({
  container: {
    textAlign: "center",
    padding: 30
  }
});

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      firstPage: {
        //Purchase
        purchasePrice: "",
        ARV: "",
        purchaseClosingCost: "",
        estimatedRepairCost: "",
        //Loan
        cashPurchase: false,
        interestOnly: "no",
        downPayment: "",
        interestRate: "",
        points: "",
        extraChargesByLender: "",
        loanLength: ""
      },
      secondPage: {
        //Income
        income: "",
        //Fixed Expenses
        electricity: "",
        waterAndSewer: "",
        PMI: "",
        garbage: "",
        HOAs: "",
        insurance: "",
        propertyTax: "",
        otherExpenses: "",
        //Variable Expenses
        vacancy: "",
        repair: "",
        capEx: "",
        managementFee: "",
        //futureAssumptions
        incomeGrowth: "",
        propValueGrowth: "",
        expenseGrowth: "",
        salesExpense: ""
      }
    };
  }

  getSteps = () => {
    return ["Purchase Information", "Rental Information", "Results"];
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleFirstPageInput = (name, value) => {
    this.setState({
      firstPage: {
        ...this.state.firstPage,
        [name]: value
      }
    });
  };

  handleSecondPageInput = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <Grid container className={classes.container} justify="center">
          <Grid item xs={8}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};
                return (
                  <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>

          <Grid item>
            {activeStep === 0 && (
              <FirstPage
                handleInput={this.handleFirstPageInput}
                values={this.state.firstPage}
              />
            )}
            {activeStep === 1 && (
              <SecondPage
                handleInput={this.handleSecondPageInput}
                values={this.state.secondPage}
              />
            )}
          </Grid>

          {/* Bottom Buttons */}
          <ButtonNav
            activeStep={activeStep}
            steps={steps}
            handleReset={this.handleReset}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Calculator);
