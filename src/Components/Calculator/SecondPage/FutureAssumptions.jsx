import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";

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
  container: {
    marginTop: "5vh"
  }
});

export class FutureAssumptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInput = (name, event) => {
    let value = event.target.value;
    this.props.handleInput(name, value);
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
              Annual Future Assumptions
            </Typography>
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <TextField
              onChange={event => this.handleInput("incomeGrowth", event)}
              value={this.props.values.incomeGrowth}
              id="anulIncomeGrowth"
              label="Income Growth"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
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
              onChange={event => this.handleInput("propValueGrowth", event)}
              value={this.props.values.propValueGrowth}
              id="anulPVGrowth"
              label="PV Growth"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
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
              onChange={event => this.handleInput("expenseGrowth", event)}
              value={this.props.values.expenseGrowth}
              id="anulExpGrowth"
              label="Expense Growth"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
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
              onChange={event => this.handleInput("salesExpense", event)}
              value={this.props.values.salesExpense}
              id="salesExpenses"
              label="Sales Expenses"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
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
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FutureAssumptions);
