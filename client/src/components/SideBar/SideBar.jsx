import React from "react";
import "./SideBar.scss";

import Button from "../button/button";
import { Link } from "react-router-dom";

let leftStyles = {
  left: "0",
  top: "0",
  transform: "translate(-100%)",
};

let aciveLeftStyles = {
  left: "0",
  top: "0",
  transform: "translate(0)",
};

let rightStyles = {
  right: "0",
  top: "0",
  transform: "translate(100%)",
};

let activeRightStyles = {
  right: "0",
  top: "0",
  transform: "translate(0)",
};

function SideBar({ sideBar, toggleSideBar, children, direction }) {
  let styles;
  let activeStyles;

  switch (direction) {
    case "left":
      styles = leftStyles;
      activeStyles = aciveLeftStyles;
      break;
    case "right":
      styles = rightStyles;
      activeStyles = activeRightStyles;
      break;
    default:
      styles = rightStyles;
      activeStyles = activeRightStyles;
  }

  return (
    <div className="cntr">
      <div
        className={sideBar ? "back-drop back-drop-open" : "back-drop"}
        onClick={toggleSideBar}
      />
      <div style={sideBar ? activeStyles : styles} className="side-bar">
        <div className="list">
          {children}
        </div>
        <Link to="/checkout"  style={{textDecoration: "none", backgroundColor: "transparent"}}>
        <Button
          className="btn"
          value="Checkout"
          styles={{
            width: "80%",
          }}
        />
      </Link>
      </div>
    </div>
  );
}

export default SideBar;
