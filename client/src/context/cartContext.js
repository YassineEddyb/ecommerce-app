import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

const product = {
  _id: 9,
  title: "Men's Game & Go Tapered-Fit Moisture-Wicking Fleece Sweatpants",
  picture:
    "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/21429437_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  images: [
    "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/21429437_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/19805189_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
    "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/19805208_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  ],
  desc: "Stay comfortable and stylish before, during and after your workouts with these Game & Go tapered sweatpants from adidas, featuring soft fleece and adjustable zipper leg openings.",
  price: 22.99,
  rating: 4.9,
  categories: ["pants"],
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
