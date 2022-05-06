import React, {useContext} from "react";
import "./products.scss";

import ProductCard from "../product-card/product-card";
import ProductContext from "../../context/products";

const Products = () => {
  const {products} = useContext(ProductContext);

  console.log(products);

  return (
    <div className="products">
      {products.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Products;
