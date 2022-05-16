import React from "react";
import "./button.scss";

function Button({ value, width, clickHandler }) {
  return (
    <div>
      <button
        type="button"
        className="btn"
        style={width ? width : null}
        onClick={clickHandler}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
