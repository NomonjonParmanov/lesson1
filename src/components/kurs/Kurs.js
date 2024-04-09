import React, { Component } from "react";
import head from "../../images/head.png";
export default class Kurs extends Component {
  render() {
    return (
      <div className="kurs">
        <div className="container kurs2">
          <button>Заказать курс</button>
          <ul>
            <li>Учеников всего:</li>
            <p>200</p>
            <li>Успешно закончили курс:</li>
            <p>190</p>
          </ul>
          <img src={head} alt="" />
        </div>
      </div>
    );
  }
}
