import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
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
    marginTop: "7vh"
  }
});

export class Income extends Component {
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
              Income Information
            </Typography>
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <TextField
              required
              id="grossMonthlyRent"
              label="Total Gross Monthly Income"
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

export default withStyles(styles)(Income);
