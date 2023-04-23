import React, { useState, useLayoutEffect, useContext } from "react";
import "./shop.scss";

import { AiOutlineBars } from "react-icons/ai";
import Select from "react-select";

import Filter from "../../components/filter/filter";
import Products from "../../components/products/products";
import SideBar from "../../components/SideBar/SideBar";
import GlobalContext from "../../context/globalContext";
import Loader from "../../components/Loader/Loader";

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
  const { isMobile } = useContext(GlobalContext);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <section>
      <div className="main-page">
        {!isMobile ? (
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
            {isMobile ? (
              <AiOutlineBars className="filter-icon" onClick={toggleSideBar} />
            ) : (
              <div />
            )}
            <div className="sort">
              {/* <label htmlFor="sort-by">Sort By</label> */}
              <Select
                styles={colourStyles}
                placeholder="SORT BY"
                isSearchable={false}
                isMulti={false}
                // defaultValue={selectedOption}
                // onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <Products className="products" />
        </div>
      </div>
    </section>
  );
}

export default Shop;
