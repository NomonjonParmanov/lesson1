import React, { Component } from "react";
import hobby from "../../images/hobby.png";
export default class Hobby extends Component {
  render() {
    return (
      <div className="container hobby">
        <div className="left">
          <img src={hobby} alt="" />
        </div>
        <div className="right">
          <h1>Чем мы занимаемся?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque,
            dignissim et feugiat elit augue in suspendisse egestas. Dictum
            vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et
            neque, adipiscing sapien sem senectus praesent aenean consequat.
            Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed
            interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus
            risus, cursus id elementum aliquet. Nullam turpis arcu malesuada
            arcu interdum placerat nisi, lobortis.{" "}
          </p>
        </div>
      </div>
    );
  }
}
