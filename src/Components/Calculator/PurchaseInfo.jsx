import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
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
  menu: {
    width: 200
  },
  typography: {
    fontWeight: "600"
  }
});

export class PurchaseInfo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.typography} variant="h4">
            Purchase Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
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
        <Grid item xs={12}>
          <TextField
            required
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
        <Grid item xs={12}>
          <TextField
            required
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
        <Grid item xs={12}>
          <TextField
            required
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
    );
  }
}

export default withStyles(styles)(PurchaseInfo);
