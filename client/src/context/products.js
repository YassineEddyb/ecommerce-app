import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const products = [
  {
    title: "Men's Slim-Fit Navy & White Stripe Blazer",
    picture: "../../../public/images/1.1.webp",
    images: [
      "../../../public/images/1.1.webp",
      "../../../public/images/1.2.webp",
      "../../../public/images/1.3.webp",
      "../../../public/images/1.4.webp",
    ],
    desc: "If you could create the perfect blazer to make your confidence soar, it would probably look a lot like this slim-fit navy and white striped blazer from Tallia.",
    price: 135.99,
    rating: 4.9,
    categories: ["blazers"],
  },
  {
    title: "INC Men's Ezra Sneakers, Created for Macy's",
    picture: "../../../public/images/2.1.webp",
    images: [
      "../../../public/images/2.1.webp",
      "../../../public/images/2.2.webp",
      "../../../public/images/2.3.webp",
      "../../../public/images/2.4.webp",
    ],
    desc: "INC International Concepts® finishes off your relaxed look with the smooth lines and comfortable fit of the Ezra low-top sneakers.",
    price: 30.99,
    rating: 4.9,
    categories: ["shoes"],
  },
  {
    title: "Men's Fleece Jogger Pants",
    picture: "../../../public/images/3.1.webp",
    images: [
      "../../../public/images/3.1.webp",
      "../../../public/images/3.2.webp",
      "../../../public/images/3.3.webp",
      "../../../public/images/3.4.webp",
    ],
    desc: "Objects in motion stay in motion. Even after practice is wrapped up, you want the same freedom to move through life with easy comfort. Slip into these adidas pants and go about your routine without a single roadblock.",
    price: 32.99,
    rating: 4.9,
    categories: ["pants"],
  },
  {
    title: "Men's Logo Hoodie",
    picture: "../../../public/images/3.1.webp",
    images: [
      "../../../public/images/3.1.webp",
      "../../../public/images/3.2.webp",
      "../../../public/images/3.3.webp",
      "../../../public/images/3.4.webp",
    ],
    desc: "Meet and embrace this versatile hoodie with an adidas Badge of Sport. It features an adjustable drawstring hood and the soft, breathable comfort of pure cotton.",
    price: 31.99,
    rating: 4.9,
    categories: ["hoodies"],
  },
];

const headers = {
  "Content-Type": "application/json",
};

const url = "http://localhost:5000/api/products";

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
