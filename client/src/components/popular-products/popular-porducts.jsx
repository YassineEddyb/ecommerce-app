import React, { useState, useEffect } from "react";
import "./popular-products.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from "../product-card/product-card";
import products from "../../utils/products-data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function PopularPorducts() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="popular-products">
      <h1>Popular Products</h1>
      <Carousel
        className="carousel"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode={!isMobile}
      >
        {products.map((el) => {
          return <ProductCard key={el._id} item={el} />;
        })}
      </Carousel>
    </div>
  );
}

export default PopularPorducts;
