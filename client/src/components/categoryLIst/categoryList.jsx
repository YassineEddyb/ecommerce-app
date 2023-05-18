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
  const { setProducts, setCount } = useContext(ProductContext);

  const clickHandler = (e) => {
    const name = e.target.name;
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const result = await axios.get(
          `/api/products?category=${name !== "men" && name !== "women" ? name: "" }&gender=${name === "women" || name === "men"? name : ""}`
        );
        setProducts(result.data.data.products);
        setCount(result.data.data.count);
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
      {categories.map((category, idx) => (
        <Link
          key={idx}
          name={category}
          to={`/shop/${category}`}
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
