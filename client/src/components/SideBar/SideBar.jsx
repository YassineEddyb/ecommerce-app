import React from "react";
import "./SideBar.scss";

function SideBar({ sideBar, toggleSideBar, children }) {
  return (
    <div className="cntr">
      <div
        className={sideBar ? "back-drop back-drop-open" : "back-drop"}
        onClick={toggleSideBar}
      />
      <div className={sideBar ? "side-bar side-bar-open" : "side-bar"}>
        {children}
      </div>
    </div>
  );
}

export default SideBar;
