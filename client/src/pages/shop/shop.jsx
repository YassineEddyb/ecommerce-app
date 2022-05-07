import React from "react";
import "./shop.scss";

import Categories from "../../components/categories/categories";
import Filter from "../../components/filter/filter";
import Products from "../../components/products/products";
import SideBarCart from "../../components/SideBarCart/SideBarCart";

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
