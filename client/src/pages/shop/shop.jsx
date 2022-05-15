import React, { useState, useLayoutEffect } from "react";
import "./shop.scss";

import Categories from "../../components/categories/categories";
import Filter from "../../components/filter/filter";
import Products from "../../components/products/products";
import { AiOutlineBars } from "react-icons/ai";
import SideBar from "../../components/SideBar/SideBar";

function getPageWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function Shop() {
  const [sideBar, setSideBar] = useState(false);
  const [pageSize, setPageSize] = useState(getPageWidth());

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };
  useLayoutEffect(() => {
    const updateSize = () => {
      setPageSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    setSideBar(false);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  console.log(pageSize[0]);

  return (
    <section>
      <Categories />
      <div className="main-page">
        {pageSize[0] > 768 ? (
          <Filter className="filters" />
        ) : (
          <SideBar
            sideBar={sideBar}
            toggleSideBar={toggleSideBar}
            direction="left"
          >
            <Filter className="filters" />
          </SideBar>
        )}
        <div className="flex">
          <div className="options">
            <AiOutlineBars className="filter-icon" onClick={toggleSideBar} />
            <div className="sort">
              <label htmlFor="sort-by">Sort By</label>
              <select id="sort-by">
                <option value="price" />
              </select>
            </div>
          </div>
          <Products className="products" />
        </div>
      </div>
    </section>
  );
}

export default Shop;
