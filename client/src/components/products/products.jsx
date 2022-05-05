import React from "react";
import "./products.scss";

import ProductCard from "../product-card/product-card";

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
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Products;
