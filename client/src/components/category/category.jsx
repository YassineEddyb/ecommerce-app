import React from "react";
import "./category.scss";

function Category({ title }) {
  return (
    <div className="category">
      <h1>{title}</h1>
    </div>
  );
}

export default Category;
