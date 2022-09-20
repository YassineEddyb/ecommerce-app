import React, { useState, useLayoutEffect, useContext } from "react";
import "./shop.scss";

import { AiOutlineBars } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import Filter from "../../components/filter/filter";
import Products from "../../components/products/products";
import SideBar from "../../components/SideBar/SideBar";
import GlobalContext from "../../context/globalContext";
import Button from "../../components/button/button";
import Loader from "../../components/Loader/Loader";
import { BiCoinStack } from "react-icons/bi";
import Paginate from "../../components/paginate/paginate";

const options = [
  { value: "price", label: "Price" },
  { value: "rate", label: "Rate" },
  { value: "popularity", label: "Popularity" },
];

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#51a767"
        : isFocused
        ? "#90d3a1"
        : undefined,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#51a767"
            : "#90d3a1"
          : undefined,
      },
      outline: "none",
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
};

function Shop() {
  const [sideBar, setSideBar] = useState(false);
  const { screenWidth } = useContext(GlobalContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate(`/shop?q=${query}`);
    }
  };

  const handleClick = (e) => {
    navigate(`/shop?q=${query}`);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section>
      <div className="main-page">
        {screenWidth > 768 ? (
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
            {screenWidth < 768 ? (
              <AiOutlineBars className="filter-icon" onClick={toggleSideBar} />
            ) : (
              <div />
            )}
            <div className="search-cntr">
              <input
                tupe="search"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={query}
                placeholder="Search ..."
                className="search"
              />
              <Button
                clickHandler={handleClick}
                value="Search"
                styles={{ width: "auto", height: "40px", padding: "0 1rem" }}
              />
            </div>
          </div>
          <Products className="products" />
          <Paginate />
        </div>
      </div>
    </section>
  );
}

export default Shop;
