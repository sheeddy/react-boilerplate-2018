import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../containers/Home";
import NotFound from "./NotFound";

const styles = theme => ({
  container: {
    heigth: "900px",
    width: "100%"
  },
  footer: {
    heigth: "200px",
    width: "100%"
  }
});

class RootRouter extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Paper className={classes.container} elevation={4}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Paper>
        <Paper className={classes.footer} elevation={4}>
          <Footer />
        </Paper>
      </div>
    );
  }
}

RootRouter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RootRouter);
