import React from "react";
import "./products.scss";

import Product from "../product/product";

const products = [
  {
    id: 1,
    title: "jacket",
    picture: "../../images/slider-2.jpg",
    images: [String],
    desc: "the best jacket ever",
    price: 49.54,
    rating: 4.9,
    categories: ["shirts"],
  },
  {
    id: 1,
    title: "jacket",
    picture: "../../images/slider-2.jpg",
    images: [String],
    desc: "the best jacket ever",
    price: 49.54,
    rating: 4.9,
    categories: ["shirts"],
  },
  {
    id: 1,
    title: "jacket",
    picture: "../../images/slider-2.jpg",
    images: [String],
    desc: "the best jacket ever",
    price: 49.54,
    rating: 4.9,
    categories: ["shirts"],
  },
  {
    id: 1,
    title: "jacket",
    picture: "../../images/slider-2.jpg",
    images: [String],
    desc: "the best jacket ever",
    price: 49.54,
    rating: 4.9,
    categories: ["shirts"],
  },
  {
    id: 1,
    title: "jacket",
    picture: "../../images/slider-2.jpg",
    images: [String],
    desc: "the best jacket ever",
    price: 49.54,
    rating: 4.9,
    categories: ["shirts"],
  },
  {
    id: 1,
    title: "jacket",
    picture: "../../images/slider-2.jpg",
    images: [String],
    desc: "the best jacket ever",
    price: 49.54,
    rating: 4.9,
    categories: ["shirts"],
  },
];

const Products = () => {
  return (
    <div className="products">
      {products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Products;
