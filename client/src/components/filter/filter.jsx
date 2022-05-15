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
    </div>
  );
}

export default Filter;
