import React, { createContext, useState, useContext, useEffect } from "react";

import UserContext from "./userContext";
import axios from "../utils/axiosConfig";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [cart, setCart] = useState(user.cart);

  useEffect(() => {
    const updateCart = async () => {
      try {
        const res = await axios.patch(
          "api/users/me",
          { cart },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        );
        setUser(res.data.user);
      } catch (err) {
        // console.log(err);
      }
    };
    if (cart?.length > 0) updateCart();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
