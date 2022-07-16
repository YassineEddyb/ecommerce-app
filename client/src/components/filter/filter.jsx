import React from "react";
import "./filter.scss";
import Checkbox from "../CheckBox/checkbox";

function Filter() {
  return (
    <div className="filters">
      <h3 className="header-text">FILTERS</h3>
      <div className="gender">
        <h4 className="title">Gender</h4>
        <Checkbox className="option" name="Men" />
        <Checkbox className="option" name="Women" />
      </div>
      <div className="large">
        <h4 className="title">Size</h4>
        <Checkbox className="option" name="ms" radio />
        <Checkbox className="option" name="md" radio />
        <Checkbox className="option" name="lg" radio />
        <Checkbox className="option" name="xl" radio />
      </div>
    </div>
  );
}

export default Filter;
