import React, { useContext } from "react";
import "./categoryList.scss";

import { Link } from "react-router-dom";
import axios from "../../utils/axiosConfig";

import GlobalContext from "../../context/globalContext";
import ProductContext from "../../context/productsContext";

const categories = [
  "men",
  "women",
  "kids",
  "T-shirts",
  "hats",
  "hoodies",
  "pants",
  "shoes",
  "shirts",
];

function CategoryList() {
  const { setIsLoading } = useContext(GlobalContext);
  const { setProducts } = useContext(ProductContext);

  const clickHandler = (e) => {
    console.log("test");
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const result = await axios.get(
          `/api/products?category=${e.target.name}`
        );
        setProducts(result.data.products);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchProducts();
  };

  return (
    <ul className="categories-list">
      {categories.map((category) => (
        <Link
          name={category}
          to="/shop/"
          className="link"
          onClick={clickHandler}
        >
          {category}
        </Link>
      ))}
    </ul>
  );
}

export default CategoryList;
