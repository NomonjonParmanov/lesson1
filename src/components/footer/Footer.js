import React, { Component } from "react";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <h1>Статьи каждую неделю</h1>
        <p>
          Больше 90% учеников прошли полный курс и смогли собрать свой первый
          компьютер
        </p>
        <form action="">
          <input type="text" placeholder="Email" />
          <button>Подписаться</button>
        </form>
        <div className="icons">
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaYoutube />
          </div>
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    );
  }
}
