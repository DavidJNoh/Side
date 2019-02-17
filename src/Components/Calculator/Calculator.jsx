import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import PurchaseInfo from "./PurchaseInfo";

const styles = theme => ({
  center: {
    justify: "center"
  },
  menu: {
    width: 200
  },
  typography: {
    display: "inline-block",
    margin: 0
  },
  container: {
    textAlign: "center",
    padding: 30
  }
});

export class Calculator extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container className={classes.container} justify="center">
          <Grid item>
            <PurchaseInfo />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Calculator);
