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
  }
});

export class PurchaseInfo extends Component {
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
        <Grid container spacing={8} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.typography} variant="h4">
              Buying Phase
            </Typography>
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <TextField
              required
              onChange={event => this.handleInput("purchasePrice", event)}
              value={this.props.values.purchasePrice}
              id="purchasePrice"
              label="Purchase Price"
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
              required
              value={this.props.values.ARV}
              onChange={event => this.handleInput("ARV", event)}
              id="afterRepairPrice"
              label="After Repair Price"
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
              value={this.props.values.purchaseClosingCost}
              onChange={event => this.handleInput("purchaseClosingCost", event)}
              id="purchaseClosingCost"
              label="Purchase Closing Cost"
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
              value={this.props.values.estimatedRepairCost}
              onChange={event => this.handleInput("estimatedRepairCost", event)}
              id="estimatedRepairCost"
              label="Estimated Repair Cost"
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

export default withStyles(styles)(PurchaseInfo);
