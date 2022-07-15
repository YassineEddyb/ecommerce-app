import React from "react";
import Category from "../category/category";
import "./categories.scss";

function Categories() {
  return (
    <div className="categories">
      <Category title="Mens" />
      <Category title="Womens" />
      <Category title="T-shirts" />
      <Category title="Best Sellers" />
    </div>
  );
}

export default Categories;
