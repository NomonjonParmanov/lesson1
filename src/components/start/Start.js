import React, { Component } from "react";
import start from "../../images/start.png";
export default class Start extends Component {
  render() {
    return (
      <div className="container">
        <div className="start">
          <div className="icon">
            <img src={start} alt="" />
            <h1>Быстрый старт</h1>
          </div>
          <p>
            Больше 90% учеников прошли полный курс и смогли собрать свой первый
            компьютер
          </p>
          <div className="rate">
            <div className="card">
              <h2>100%</h2>
              <div className="first"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </div>{" "}
            <div className="card">
              <h2>75%</h2>
              <div className="second"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </div>{" "}
            <div className="card">
              <h2>50%</h2>
              <div className="third"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </div>{" "}
            <div className="card">
              <h2>Итог</h2>
              <div className="four"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
