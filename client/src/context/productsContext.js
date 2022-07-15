import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

import products from "../utils/products-data";

// const headers = {
//   "Content-Type": "application/json",
// };

// const url = "http://localhost:5000/api/products";

export const ProductProvider = ({ children }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const result = await axios.get(url, { headers });
  //       setProducts(result.data.products);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
