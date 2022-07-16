import React from "react";
import Category from "../category/category";
import "./categories.scss";

const categories = [
  {
    title: "Men's",
    img: require("../../assets/images/mens.png"),
  },
  {
    title: "Women's",
    img: require("../../assets/images/womens.png"),
  },
  {
    title: "Best Sellers",
    img: require("../../assets/images/bestsellers.png"),
  },
  {
    title: "New Brands",
    img: require("../../assets/images/newbrands.png"),
  },
];

function Categories() {
  return (
    <div className="categories">
      {categories.map((el, idx) => {
        return <Category key={idx} item={el} />;
      })}
    </div>
  );
}

export default Categories;
