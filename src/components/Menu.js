import "./Menu.css";
import React from "react";

function Menu(props) {
    console.log(props.data.img);
  return (
    <>
      <div id="dish_container">
        <div id="img_conatiner">
          <img
            src={props.data.img}
            alt=""
          />
        </div>
        <div id="text_container">
          <div id="price">
            <h3 id="title">{props.data.title}</h3>
            <div style={{color:"#C59D5F" , fontWeight:"bold" , fontSize:"18px"}}>$ {props.data.price}</div>
          </div>
          <div id="desc">
            <p>{props.data.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
