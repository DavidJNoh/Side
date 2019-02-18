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

export class FixedExpenses extends Component {
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
              Fixed Expenses
            </Typography>
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <TextField
              onChange={event => this.handleInput("electricity", event)}
              value={this.props.values.electricity}
              id="electricity"
              label="Electricity"
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
              onChange={event => this.handleInput("waterAndSewer", event)}
              value={this.props.values.waterAndSewer}
              id="waterAndSewer"
              label="Water & Sewer"
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
              onChange={event => this.handleInput("PMI", event)}
              value={this.props.values.PMI}
              id="PMI"
              label="PMI"
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
              onChange={event => this.handleInput("garbage", event)}
              value={this.props.values.garbage}
              id="garbage"
              label="Garbage"
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
              onChange={event => this.handleInput("HOAs", event)}
              value={this.props.values.HOAs}
              id="HOAs"
              label="HOAs"
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
              onChange={event => this.handleInput("insurance", event)}
              value={this.props.values.insurance}
              id="insurance"
              label="Monthly Insurance"
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
              onChange={event => this.handleInput("propertyTax", event)}
              value={this.props.values.propertyTax}
              id="propertyTax"
              label="Property Tax"
              disabled="true"
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
              onChange={event => this.handleInput("otherExpenses", event)}
              value={this.props.values.otherExpenses}
              id="otherMonthlyExpenses"
              label="Other Expenses"
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
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FixedExpenses);
