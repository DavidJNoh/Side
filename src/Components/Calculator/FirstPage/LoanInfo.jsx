import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Zoom from "@material-ui/core/Zoom";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: "inline-block"
  },
  typography: {
    fontWeight: "600",
    useNextVariants: true
  },
  formLabel: {
    fontSize: "1.2rem"
  },
  formGroup: {
    display: "block"
  },
  container: {
    marginTop: "7vh"
  }
});

export class LoanInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInput = (name, event) => {
    let value = event.target.value;
    this.props.handleInput(name, value);
  };

  handleCashPurchaseSwitch = () => {
    this.props.handleInput("cashPurchase", !this.props.values.cashPurchase);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid
          container
          spacing={8}
          justify="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <Typography className={classes.typography} variant="h4">
              Loan Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.props.values.cashPurchase}
                  onChange={this.handleCashPurchaseSwitch}
                />
              }
              label="Cash Purchase?"
            />
          </Grid>
        </Grid>
        <Zoom in={!this.props.values.cashPurchase}>
          <Grid container spacing={8} justify="center">
            <Grid item xs={12}>
              <FormControl>
                <FormLabel className={classes.formLabel}>
                  Interest Only Loan?
                </FormLabel>
                <RadioGroup
                  aria-label="InterestOnly"
                  value={this.props.values.interestOnly}
                  className={classes.formGroup}
                  onChange={event => this.handleInput("interestOnly", event)}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <TextField
                required
                value={this.props.values.downPayment}
                onChange={event => this.handleInput("downPayment", event)}
                id="downPayment"
                label="Down Payment %"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  )
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 600,
                    fontSize: "18px"
                  }
                }}
              />
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <TextField
                required
                value={this.props.values.interestRate}
                onChange={event => this.handleInput("interestRate", event)}
                id="loanInterestRate"
                label="Loan Interest Rate"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  )
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 600,
                    fontSize: "18px"
                  }
                }}
              />
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <TextField
                value={this.props.values.points}
                onChange={event => this.handleInput("points", event)}
                id="pointsByLender"
                label="Points Charged"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Points</InputAdornment>
                  )
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 600,
                    fontSize: "18px"
                  }
                }}
              />
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <TextField
                value={this.props.values.extraChargesByLender}
                onChange={event =>
                  this.handleInput("extraChargesByLender", event)
                }
                id="extraChargesByLender"
                label="Extra $ By Lender"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 600,
                    fontSize: "18px"
                  }
                }}
              />
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <TextField
                value={this.props.values.loanLength}
                onChange={event => this.handleInput("loanLength", event)}
                id="loanLength"
                label="Loan Length"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Year(s)</InputAdornment>
                  )
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 600,
                    fontSize: "18px"
                  }
                }}
              />
            </Grid>
          </Grid>
        </Zoom>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoanInfo);
