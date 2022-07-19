import { createContext, useState, useEffect, useContext } from "react";

import axios from "../utils/axiosConfig";
import GlobalContext from "./globalContext";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const result = await axios.get("/api/products");
        setProducts(result.data.products);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
