import React from "react";
import "./checkoutProduct.scss";

function CheckoutProduct({ item }) {
  return (
    <div className="checkout-product">
      <div className="product-info">
        <div className="image">
          <img src={item.product.picture} alt={item.product.title} />
        </div>
        <h5>{item.product.title}</h5>
      </div>
      <span>${item.product.price}</span>
      <span>{item.quantity}</span>
      <span className="price">
        ${(item.product.price * item.quantity).toFixed(2)}
      </span>
    </div>
  );
}

export default CheckoutProduct;
