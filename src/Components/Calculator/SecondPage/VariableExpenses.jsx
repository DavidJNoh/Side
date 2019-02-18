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

export class VariableExpenses extends Component {
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
              Variable Expenses
            </Typography>
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <TextField
              onChange={event => this.handleInput("vacancy", event)}
              value={this.props.values.vacancy}
              id="vacancy"
              label="Vacancy"
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
              onChange={event => this.handleInput("repair", event)}
              value={this.props.values.repair}
              id="repairs"
              label="Maintenance"
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
              onChange={event => this.handleInput("capEx", event)}
              value={this.props.values.capEx}
              id="capEx"
              label="Capital Ex"
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
              onChange={event => this.handleInput("managementFee", event)}
              value={this.props.values.managementFee}
              id="managementFee"
              label="Management"
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

export default withStyles(styles)(VariableExpenses);
