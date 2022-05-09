import React, { useContext } from "react";
import "./SideBarCart.scss";

import SideBar from "../SideBar/SideBar";
import CartContext from "../../context/cartContext";
import CartProduct from "../CartProduct/CartProduct";

function SideBarCart({ sideBar, toggleSideBar }) {
  const { cart } = useContext(CartContext);

  if (sideBar) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "auto";

  return (
    <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar}>
      <div className="side-bar-cart">
        <h3 className="title">CART</h3>
        {cart.map((el, idx) => {
          return <CartProduct key={idx} item={el} />;
        })}
      </div>
    </SideBar>
  );
}

export default SideBarCart;
