import React from "react";
import "./SideBar.scss";

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
        {children}
      </div>
    </div>
  );
}

export default SideBar;
