import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    textAlign: "center",
    padding: 30
  }
});

export class ButtonNav extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          {this.props.activeStep === this.props.steps.length ? (
            <Grid container justify="center" spacing={24}>
              <Grid item xs={12}>
                <Typography>You can calculate from the start</Typography>
              </Grid>
              <Grid item>
                <Button
                  disabled={this.props.activeStep === 0}
                  onClick={this.props.handleBack}
                  color="secondary"
                  variant="contained"
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.props.handleReset}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container justify="center" spacing={24}>
              <Grid item>
                <Button
                  disabled={this.props.activeStep === 0}
                  onClick={this.props.handleBack}
                  color="secondary"
                  variant="contained"
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.props.handleNext}
                >
                  {this.props.activeStep === this.props.steps.length - 1
                    ? "Finish"
                    : "Next"}
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ButtonNav);
