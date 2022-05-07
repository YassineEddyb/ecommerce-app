import React from "react";
import SideBar from "../SideBar/SideBar";
import "./SideBarCart.scss";

function SideBarCart({ sideBar, toggleSideBar }) {
  if (sideBar) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "auto";

  return (
    <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar}>
      <div className="side-bar-cart">
        <h3 className="title">CART</h3>
      </div>
    </SideBar>
  );
}

export default SideBarCart;
