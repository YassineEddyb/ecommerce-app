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
  const [value, setValue] = React.useState([0, 500]);
  const { setProducts } = useContext(ProductContext);
  const { setIsLoading } = useContext(GlobalContext);
  const [filters, setFilters] = useState({
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
  const [gender, setGender] = useState({
    men: false,
    women: false,
  }) 
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("q");
  const page = new URLSearchParams(search).get("page");

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `/api/products?page=${page}&q=${query ? query : ""}&price=${value[0]},${
            value[1]
          }&category=${getObjectasString(filters)}&size=${getObjectasString(
            sizes
          )}&gender=${gender.men? "men" : ""},${gender.women? "women": ""}`
        );
        setProducts(res.data.products);
        console.log(res.data.products);
        setIsLoading(false);
      } catch (err) {
        setProducts({});
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [value, filters, sizes, query, gender, page]);

  const handleCategory = (e) => {
    const name = e.target.id;
    setFilters({ ...filters, [name]: !filters[name] });
  };

  const handleSize = (e) => {
    const name = e.target.id;
    setSizes({ ...sizes, [name]: !sizes[name] });
  };

  const handleGender = (e) => {
    const name = e.target.id;
    setGender({ ...gender, [name]: !gender[name] });
  }

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filters">
      <h3 className="header-text">FILTERS</h3>
      <div className="gender">
        <h4 className="title">Gender</h4>
        <Checkbox handleChange={handleGender} className="option" name="men" />
        <Checkbox
          handleChange={handleGender}
          className="option"
          name="women"
        />
      </div>
      <div className="categories-filter">
        <h4 className="title">Categories</h4>
        <Checkbox
          handleChange={handleCategory}
          className="option"
          name="T-shirts"
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
          min={10}
          max={500}
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
