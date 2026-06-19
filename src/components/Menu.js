import "./Menu.css";
import React from "react";

function Menu(props) {
  return (
    <div id="dish_container" data-test-id={`menu-item-${props.data.category}`}>
      {" "}
      <div id="img_container">
        <img src={props.data.img} alt="" />
      </div>
      <div id="text_container">
        <div id="price">
          <h3 id="title">{props.data.title}</h3>
          <div
            style={{ color: "#C59D5F", fontWeight: "bold", fontSize: "18px" }}
          >
            $ {props.data.price}
          </div>
        </div>
        <div id="desc">
          <p>{props.data.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
