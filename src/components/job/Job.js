import React, { Component } from "react";
import comp from "../../images/comp.png";
import usb from "../../images/usb.png";
import usb2 from "../../images/usb2.png";
export default class Job extends Component {
  render() {
    return (
      <div className="container job">
        <h1>Получите профессию прямо сейчас</h1>
        <div className="cards">
          <div className="card">
            <img src={comp} alt="" />
            <h2>Только практические навыки в работе</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              eget velit quisque accumsan amet tortor. Velit, volutpat egestas
              fringilla mi porttitor tempus. Placerat dui.
            </p>
          </div>
          <div className="card">
            <img src={usb} alt="" />
            <h2>Работа на самом современном оборудовании</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              eget velit quisque accumsan amet tortor. Velit, volutpat egestas
              fringilla mi porttitor tempus. Placerat dui.
            </p>
          </div>
          <div className="card">
            <img src={usb2} alt="" />
            <h2>Сертификация по окончании обучения</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              eget velit quisque accumsan amet tortor. Velit, volutpat egestas
              fringilla mi porttitor tempus. Placerat dui.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
