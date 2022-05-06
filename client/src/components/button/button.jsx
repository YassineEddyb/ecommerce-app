import React from 'react';
import "./button.scss";

function Button({value}) {
  return (
    <div>
      <button type="button" className="btn">
        {value}
      </button>
    </div>
  )
}

export default Button;
