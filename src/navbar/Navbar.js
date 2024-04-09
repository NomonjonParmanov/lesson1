import React, { Component } from "react";
import logo from "../images/logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <div className="container navbar">
        <img src={logo} alt="" />
        <ul>
          <li>Главная</li>
          <li>Курсы</li>
          <li>Расписание</li>
          <li>Преподаватели</li>
          <li>Рассылка</li>
          <li>Контакты</li>
        </ul>
        <button>Зайти в кабинет</button>
      </div>
    );
  }
}
