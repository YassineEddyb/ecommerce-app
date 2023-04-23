import React from "react";
import "./home.styles.scss";
import Header from "../../components/header/header-component";
import Slider from "../../components/slider/slider-component";
import PopularPorducts from "../../components/popular-products/popular-porducts";
import Categories from "../../components/categories/categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="home-page">
        <PopularPorducts title="Popular Products" />
        <Categories className="categories-section" />
      </div>
    </div>
  );
};

export default Home;
