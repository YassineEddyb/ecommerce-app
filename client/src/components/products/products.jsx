import React, { useContext } from "react";
import "./products.scss";

import ProductCard from "../product-card/product-card";
import ProductContext from "../../context/productsContext";
import GlobalContext from "../../context/globalContext";
import Loader from "../Loader/Loader";

const Products = () => {
  const { products } = useContext(ProductContext);
  const { isLoading } = useContext(GlobalContext);

  return (
    <div className="products">
        {isLoading ? (
        <Loader load />
      ) : products.length > 0 ? (
        products.map((item) => {
          return <ProductCard key={item._id} item={item} shadow />;
        })
      ) : (
        <h3 className="empty">No Product To Show</h3>
      )}
    </div>
    
  );
};

export default Products;
