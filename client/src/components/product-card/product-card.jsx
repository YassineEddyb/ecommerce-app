import React, { useState, useContext } from "react";
import "./product-card.scss";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";

function ProductCard({ item, shadow }) {
  const { user, setUser } = useContext(UserContext);
  let el;

  const addProductToCart = async () => {
    if ((el = user.cart?.find((el) => el.product._id == item._id))) {
      el.quantity += 1;
      setUser({ ...user, cart: [...user.cart] });
    } else if (user.cart)
      setUser({
        ...user,
        cart: [...user.cart, { product: item, quantity: 1 }],
      });
  };

  return (
    <div className={`product ${shadow ? "shadow" : null}`}>
      <div className="image">
        <div className="add-to-cart" onClick={addProductToCart}>
          <FiShoppingCart />
          <span>ADD TO CART</span>
        </div>
        <Link to={"/product/" + item._id}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <span className="title">
        {item.title.substring(0, 35)}
        {item.title.length > 35 ? ".." : null}
      </span>
      <div className="info">
        <span className="price">${item.price}</span>
        <div className="rating">
          <span>{item.rating}</span>
          <AiFillStar style={{ color: "#FDCC0D" }} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
