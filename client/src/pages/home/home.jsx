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
      <PopularPorducts />
      <Categories />
    </div>
  );
};

export default Home;
