import React from "react";
import "./shop.scss";

import Categories from "../../components/categories/categories";
import Header from "../../components/header/header-component";
import Filter from "../../components/filter/filter";
import Products from "../../components/products/products";

function Shop() {
  return (
    <section>
      <Categories />
      <div className="main-page">
        <Filter />
        <Products />
      </div>
    </section>
  );
}

export default Shop;
