import React from "react";
import "./button.scss";

function Button({ value, width }) {
  return (
    <div>
      <button
        type="button"
        className="btn"
        style={width ? { width: width } : null}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
