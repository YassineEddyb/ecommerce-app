import React from "react";
import "./checkbox.scss";

import Box from "@material-ui/core/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Checkbox({ name, handleChange, checked }) {
  return (
    <div className="checkbox">
      <Box
        id={name}
        className="box"
        onChange={handleChange}
        {...label}
        color="#ffffff"
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Checkbox;
