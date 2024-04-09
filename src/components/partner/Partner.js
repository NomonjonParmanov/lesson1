import React, { Component } from "react";
import head from "../../images/start.png";
import partner from "../../images/partners__logos.png";
export default class Partner extends Component {
  render() {
    return (
      <div className="container partner">
        <div className="icon">
          <img src={head} alt="" />
          <h1>Партнеры - топовые бренды</h1>
        </div>
        <img src={partner} alt="" />
      </div>
    );
  }
}
