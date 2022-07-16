import React from "react";
import "./checkbox.scss";

function Checkbox({ name, radio }) {
  return (
    <div className="checkbox">
      <input id={name} type={radio ? "radio" : "checkbox"} name="box" />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Checkbox;
