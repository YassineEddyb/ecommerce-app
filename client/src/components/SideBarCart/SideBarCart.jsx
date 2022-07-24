import React, { useContext } from "react";
import "./SideBarCart.scss";

import SideBar from "../SideBar/SideBar";
import userContext from "../../context/userContext";
import CartProduct from "../CartProduct/CartProduct";
import Button from "../button/button";

import { Link } from "react-router-dom";

function SideBarCart({ sideBar, toggleSideBar }) {
  const { user } = useContext(userContext);

  if (sideBar) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "auto";

  return (
    <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar}>
      <div className="side-bar-cart">
        <h3 className="title">CART</h3>
        {user.cart?.length > 0 ? (
          user.cart?.map((el, idx) => {
            return <CartProduct key={idx} item={el} />;
          })
        ) : (
          <div className="empty">No Items In Cart</div>
        )}
      </div>
      <Link to="/checkout">
        <Button
          className="btn"
          value="Checkout"
          styles={{
            width: "80%",
            position: "fixed",
            bottom: "2rem",
            left: "2.3rem",
          }}
        />
      </Link>
    </SideBar>
  );
}

export default SideBarCart;
