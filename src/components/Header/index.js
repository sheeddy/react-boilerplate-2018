import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Home from "material-ui-icons/Home";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import { Link } from "react-router-dom";
import { Styles } from "./stylesComponents";

const Header = props => {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.ContainerMenu}>
      <Tabs className={classes.menu}>
        <Tab icon={<Home />} className={classes.tabHome}>
          <Link to="/" />
        </Tab>
        <Tab label="Getting Started" className={classes.tab}>
          <Link to="/started" />
        </Tab>
        <Tab label="Item Three" className={classes.tab} />
      </Tabs>
      <Toolbar className={classes.login}>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Header);
