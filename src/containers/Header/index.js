import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import { styles } from "./stylesComponents";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={styles.root}>
        <AppBar position="static" centered>
          <Tabs>
            <Tab label="Item One" />
            <Tab label="Item Two" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
