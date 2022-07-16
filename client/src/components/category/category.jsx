import React from "react";
import { Link } from "react-router-dom";
import "./category.scss";

function Category({ item }) {
  return (
    <Link to="/shop" className="category">
      <img src={item.img} alt={item.title} />
    </Link>
  );
}

export default Category;
