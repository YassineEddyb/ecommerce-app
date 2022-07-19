import React from "react";
import "./filter.scss";

import Checkbox from "../CheckBox/checkbox";
import Slider from "@material-ui/core/Slider";

function Filter() {
  // Our States
  const [value, setValue] = React.useState([0, 100]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filters">
      <h3 className="header-text">FILTERS</h3>
      <div className="gender">
        <h4 className="title">Gender</h4>
        <Checkbox className="option" name="Men" />
        <Checkbox className="option" name="Women" />
      </div>
      <div className="size">
        <h4 className="title">Size</h4>
        <Checkbox className="option" name="S" radio />
        <Checkbox className="option" name="M" radio />
        <Checkbox className="option" name="L" radio />
        <Checkbox className="option" name="XL" radio />
      </div>
      <div className="price-range">
        <h4 className="title">Price</h4>
        <Slider
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
          className="slide"
        />
      </div>
    </div>
  );
}

export default Filter;
