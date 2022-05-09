import React from "react";
import Quantity from "../quantity/quantity";
import "./CartProduct.scss";

import { RiDeleteBinLine } from "react-icons/ri";

function CartProduct({ item }) {
  return item.product ? (
    <div className="cart-product">
      <div className="image">
        <img src={item.product.picture} alt={item.product.title} />
      </div>
      <div className="product-info">
        <h5>{item.product.title.substring(0, 25)} . . .</h5>
        <span>${item.product.price}</span>
        <Quantity product={item.product} update />
      </div>
      <RiDeleteBinLine className="delete" />
    </div>
  ) : null;
}

export default CartProduct;
