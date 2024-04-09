import React, { Component } from "react";
import load from "../../images/start.png";
import avatar1 from "../../images/avatar.png";
import avatar2 from "../../images/avatar2.png";
import avatar3 from "../../images/avatar3.png";
export default class Learning extends Component {
  render() {
    return (
      <div className="container learn">
        <div className="icon">
          <img src={load} alt="" />
          <h1>Ваши преподаватели</h1>
        </div>
        <div className="cards">
          <div className="card">
            <img src={avatar1} alt="" />
            <h3>Дмитрий Иванов</h3>
            <p>Специалист по видеокартам</p>
            <button>Биография</button>
          </div>
          <div className="card">
            <img src={avatar2} alt="" />
            <h3>Дмитрий Иванов</h3>
            <p>Специалист по видеокартам</p>
            <button>Биография</button>
          </div>
          <div className="card">
            <img src={avatar3} alt="" />
            <h3>Дмитрий Иванов</h3>
            <p>Специалист по видеокартам</p>
            <button>Биография</button>
          </div>
        </div>
      </div>
    );
  }
}
