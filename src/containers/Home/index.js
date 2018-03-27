import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Styles } from "./styledComponent";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Paper className={classes.container} elevation={5}>
          {this.props.children}
        </Paper>
        <Paper className={classes.footer} elevation={5}>
          <Footer />
        </Paper>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Home);
