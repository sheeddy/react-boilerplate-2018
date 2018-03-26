import React, { Component } from "react";
import { Styled } from "./styledComponent";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <p className={Styled.home}>Home</p>
        </div>
      </div>
    );
  }
}
