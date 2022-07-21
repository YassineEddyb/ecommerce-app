import React from "react";
import "./checkbox.scss";

import Box from "@material-ui/core/Checkbox";
import { pink } from "@material-ui/core/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Checkbox({ name, handleChange }) {
  return (
    <div className="checkbox">
      <Box
        id={name}
        className="box"
        onChange={handleChange}
        {...label}
        // color="success"
        // sx={{
        //   color: pink[800],
        //   "&.Mui-checked": {
        //     color: pink[600],
        //   },
        // }}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Checkbox;
