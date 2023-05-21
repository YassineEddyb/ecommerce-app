import React, { useState, useEffect, useContext } from "react";
import "./popular-products.scss";

import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from "../product-card/product-card";
import axios from "../../utils/axiosConfig";

const responsive = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 6 },
  { width: 1750, itemsToShow: 8 },
];

function PopularPorducts({ title }) {
  const [isMobile, setIsMobile] = useState(false);
  const [products, setProducts] = useState([]);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const fetchProducts = async () => {
      try {
        const res = await axios.get("api/products/popularProducts");
        setProducts(res.data.products);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchProducts();
  }, [isMobile]);

  return (
    <div className="popular-products">
      <h2>{title}</h2>
      <Carousel
        className="carousel"
        breakPoints={responsive}
        pagination={false}
        enableSwipe={false}
      >
        {products.map((el) => {
          return <ProductCard className="item" key={el._id} item={el} />;
        })}
      </Carousel>
    </div>
  );
}

export default PopularPorducts;
