import React, { useContext, useState } from "react";
import Quantity from "../quantity/quantity";
import "./CartProduct.scss";

import { RiDeleteBinLine } from "react-icons/ri";
import UserContext from "../../context/userContext";

function CartProduct({ item }) {
  const { user, setUser } = useContext(UserContext);
  let [quantity, setQuantity] = useState(item?.quantity || 0);

  const removeProduct = () => {
    user.cart.forEach((el, idx) => {
      if (item.product._id === el.product._id) {
        user.cart.splice(idx, 1);
      }
    });

    setUser({ ...user });
  };

  return item.product ? (
    <div className="cart-product">
      <div className="image">
        <img src={item.product.picture} alt={item.product.title} />
      </div>
      <div className="product-info">
        <h5>{item.product.title}</h5>
        <span>${item.product.price}</span>
        <Quantity product={item.product} update />
      </div>
      <RiDeleteBinLine
        className="delete"
        onClick={removeProduct}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  ) : null;
}

export default CartProduct;
