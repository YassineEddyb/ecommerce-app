import React, { useContext } from "react";
import "./products.scss";

import ProductCard from "../product-card/product-card";
import ProductContext from "../../context/productsContext";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map((item) => {
        return <ProductCard key={item._id} item={item} shadow />;
      })}
    </div>
  );
};

export default Products;
