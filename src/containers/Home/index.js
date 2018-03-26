import React, { Component } from "react";
import { Styled } from "./styledComponent";
export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="home-container">
          <p style={Styled.home}>Home</p>
        </div>
      </div>
    );
  }
}
