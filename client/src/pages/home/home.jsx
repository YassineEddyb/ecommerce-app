import React from "react";
import "./home.styles.scss";
import Header from "../../components/header/header-component";
import Slider from "../../components/slider/slider-component";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slider />
    </div>
  );
};

export default Home;
