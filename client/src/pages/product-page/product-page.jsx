import React, { useState, useContext } from "react";
import "./product-page.scss";

import ProductContext from "../../context/products";
import Button from "../../components/button/button";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ProductGalory from "../../components/product-galory/product-galory";

function ProductPage() {
  const { products } = useContext(ProductContext);
  const product = products[0];
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((quantity += 1));
  };

  const decrementQuantity = () => {
    quantity > 0 ? setQuantity((quantity -= 1)) : null;
  };

  return (
    <div className="product-page">
      <ProductGalory images={product.images} />
      <div className="details">
        <h3 className="title">{product.title}</h3>
        <h4 className="price">$ {product.price}</h4>
        <div className="quantity">
          <span>Quantity:</span>
          <div>
            <AiOutlineMinus className="icon" onClick={decrementQuantity} />
            <span>{quantity}</span>
            <AiOutlinePlus className="icon" onClick={incrementQuantity} />
          </div>
        </div>
        <Button value="Add To Cart" />
        <div className="desc">
          <span>Description</span>
          <p>{product.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
