import React from "react";
import "./checkbox.scss";

function Checkbox({ name }) {
  return (
    <div className="checkbox">
      <input id={name} type="checkbox" />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Checkbox;
