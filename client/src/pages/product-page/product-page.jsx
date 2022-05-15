import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./product-page.scss";

import ProductContext from "../../context/productsContext";
import Button from "../../components/button/button";
import ProductGalory from "../../components/product-galory/product-galory";
import Quantity from "../../components/quantity/quantity";

function ProductPage() {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  console.log(id);
  const product = products.find((e) => e._id == id);

  return (
    <div className="product-page">
      <ProductGalory images={product.images} />
      <div className="details">
        <h3 className="title">{product.title}</h3>
        <h4 className="price">$ {product.price}</h4>
        <div className="quantity-title">
          <span>Quantity:</span>
          <Quantity className="quantity-cmp" product={product} />
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
