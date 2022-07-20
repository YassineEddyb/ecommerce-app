import React, { useEffect, useContext } from "react";
import "./filter.scss";

import Checkbox from "../CheckBox/checkbox";
import Slider from "@material-ui/core/Slider";
import axios from "../../utils/axiosConfig";
import GlobalContext from "../../context/globalContext";
import ProductContext from "../../context/productsContext";

function Filter() {
  const [value, setValue] = React.useState([0, 100]);
  const { setProducts } = useContext(ProductContext);
  const { setIsLoading } = useContext(GlobalContext);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `/api/products?price=${value[0]},${value[1]}`
        );
        setProducts(res.data.products);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchProducts();
  };

  return (
    <div className="filters">
      <h3 className="header-text">FILTERS</h3>
      <div className="gender">
        <h4 className="title">Gender</h4>
        <Checkbox className="option" name="Men" />
        <Checkbox className="option" name="Women" />
      </div>
      <div className="size">
        <h4 className="title">Size</h4>
        <Checkbox className="option" name="S" radio />
        <Checkbox className="option" name="M" radio />
        <Checkbox className="option" name="L" radio />
        <Checkbox className="option" name="XL" radio />
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
