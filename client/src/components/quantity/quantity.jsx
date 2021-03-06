import React, { useState, useContext } from "react";
import "./quantity.scss";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import UserContext from "../../context/userContext";

function Quantity({ product, update, quantity, setQuantity }) {
  const { user, setUser } = useContext(UserContext);
  const item = user.cart?.find((el) => product._id === el.product._id);
  // let [quantity, setQuantity] = useState(item?.quantity || 0);

  if (update) quantity = item?.quantity;

  const incrementQuantity = () => {
    if (update) {
      item.quantity += 1;
      setUser({ ...user });
    }
    setQuantity((quantity += 1));
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      if (update) {
        item.quantity -= 1;
        setUser({ ...user });
      }
      setQuantity((quantity -= 1));
    }
  };

  return (
    <div className="quantity">
      <AiOutlineMinus className="icon" onClick={decrementQuantity} />
      <span>{quantity}</span>
      <AiOutlinePlus className="icon" onClick={incrementQuantity} />
    </div>
  );
}

export default Quantity;
