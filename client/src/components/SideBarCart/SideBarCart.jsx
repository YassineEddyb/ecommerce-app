import React, { useContext } from "react";
import "./SideBarCart.scss";

import SideBar from "../SideBar/SideBar";
import CartContext from "../../context/cartContext";
import CartProduct from "../CartProduct/CartProduct";

function SideBarCart({ sideBar, toggleSideBar }) {
  const { cart } = useContext(CartContext);

  console.log(cart);

  if (sideBar) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "auto";

  return (
    <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar}>
      <div className="side-bar-cart">
        <h3 className="title">CART</h3>
        {cart.map((el) => {
          return <CartProduct key={el._id} item={el} />;
        })}
      </div>
    </SideBar>
  );
}

export default SideBarCart;
