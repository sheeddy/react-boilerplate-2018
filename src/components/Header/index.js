import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Home from "material-ui-icons/Home";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import { Link } from "react-router-dom";
import { Styles } from "./stylesComponents";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.ContainerMenu}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.menu}
          indicatorColor="red"
        >
          <Tab icon={<Home />} className={classes.tabHome} to="/">
            <Link to="/" />
          </Tab>
          <Tab label="Getting Started" className={classes.tab}>
            <Link to="/started" />
          </Tab>
          <Tab label="Item Three" className={classes.tab}>
            <Link to="/asd" />
          </Tab>
        </Tabs>
        <Toolbar className={classes.login}>
          <Button color="inherit">
            <Link to="/login" />
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Header);
