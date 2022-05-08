import React from "react";
import "./CartProduct.scss";

function CartProduct({ item }) {
  return item.product ? (
    <div className="cart-product">
      <div className="image">
        <img src={require("../../images/slider-2.jpg")} />
      </div>
      <div className="product-info">
        <h5>
          {item.product.title}
        </h5>
        <span>{item.product.price}</span>
      </div>
    </div>
  ) : null;
}

export default CartProduct;
