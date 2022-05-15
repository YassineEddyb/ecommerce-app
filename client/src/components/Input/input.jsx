import React from "react";
import "./input.scss";

function Input({ name, value, changeHandler }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        className="input"
        type={name}
        placeholder={`Enter your ${name}`}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input;
