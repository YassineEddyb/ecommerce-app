import React, { useState, useEffect, useContext } from "react";
import "./filter.scss";

import Checkbox from "../CheckBox/checkbox";
import Slider from "@material-ui/core/Slider";
import axios from "../../utils/axiosConfig";
import GlobalContext from "../../context/globalContext";
import ProductContext from "../../context/productsContext";

import { useLocation } from "react-router-dom";

const getObjectasString = (filter) => {
  let str = "";
  Object.keys(filter).forEach((el) => {
    if (filter[el]) {
      str += el + ",";
    }
  });
  return str;
};

function Filter(props) {
  const [value, setValue] = React.useState([0, 100]);
  const { setProducts } = useContext(ProductContext);
  const { setIsLoading } = useContext(GlobalContext);
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    hats: false,
    "t-shirts": false,
    shoes: false,
    hoodies: false,
    pants: false,
  });
  const [sizes, setSizes] = useState({
    s: false,
    m: false,
    l: false,
    xl: false,
  });
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("q");

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `/api/products?q=${query ? query : ""}&price=${value[0]},${
            value[1]
          }&category=${getObjectasString(filters)}&size=${getObjectasString(
            sizes
          )}`
        );
        setProducts(res.data.products);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [value, filters, sizes, query]);

  const handleCategory = (e) => {
    const name = e.target.id;
    setFilters({ ...filters, [name]: !filters[name] });
  };

  const handleSize = (e) => {
    const name = e.target.id;
    setSizes({ ...sizes, [name]: !sizes[name] });
  };

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filters">
      <h3 className="header-text">FILTERS</h3>
      <div className="gender">
        <h4 className="title">Gender</h4>
        <Checkbox handleChange={handleCategory} className="option" name="men" />
        <Checkbox
          handleChange={handleCategory}
          className="option"
          name="women"
        />
      </div>
      <div className="categories-filter">
        <h4 className="title">Categories</h4>
        <Checkbox
          handleChange={handleCategory}
          className="option"
          name="t-shirts"
        />
        <Checkbox
          handleChange={handleCategory}
          className="option"
          name="hoodies"
        />
        <Checkbox
          handleChange={handleCategory}
          className="option"
          name="hats"
        />
        <Checkbox
          handleChange={handleCategory}
          className="option"
          name="pants"
        />
        <Checkbox
          handleChange={handleCategory}
          className="option"
          name="shoes"
        />
      </div>
      <div className="size">
        <h4 className="title">Size</h4>
        <Checkbox handleChange={handleSize} className="option" name="S" radio />
        <Checkbox handleChange={handleSize} className="option" name="M" radio />
        <Checkbox handleChange={handleSize} className="option" name="L" radio />
        <Checkbox
          handleChange={handleSize}
          className="option"
          name="XL"
          radio
        />
      </div>
      <div className="price-range">
        <h4 className="title">Price</h4>
        <Slider
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
          className="slide"
        />
      </div>
    </div>
  );
}

export default Filter;
