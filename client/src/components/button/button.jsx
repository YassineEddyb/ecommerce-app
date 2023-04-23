import React from "react";
import "./button.scss";

function Button({ value, styles, clickHandler }) {
  return (
    <div>
      <button
        type="button"
        className="btn"
        style={styles ? styles : null}
        onClick={clickHandler}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
