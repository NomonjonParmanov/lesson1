import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";

export default class Header extends Component {
  render() {
    return (
      <div className=" header">
        <Navbar />
        <div className="container">
          <h1>Первый курс по компьютерной сборке</h1>
          <div className="times">
            <div className="time">
              <h2>18</h2>
              <p>Дней</p>
            </div>
            <div className="time">
              <h2>18</h2>
              <p>Часов</p>
            </div>
            <div className="time">
              <h2>18</h2>
              <p>Минут</p>
            </div>
            <div className="time">
              <h2>18</h2>
              <p>Секунд</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
