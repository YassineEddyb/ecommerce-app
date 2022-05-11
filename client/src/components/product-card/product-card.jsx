import React, { useContext } from "react";
import "./product-card.scss";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

function ProductCard({ item }) {
  const { cart, setCart } = useContext(CartContext);
  let el;

  const addProductToCart = () => {
    if ((el = cart.find((el) => el.product._id == item._id))) {
      el.quantity += 1;
      setCart([...cart]);
    } else setCart([...cart, { product: item, quantity: 1 }]);
  };

  return (
    <div className="product">
      <div className="image">
        <div className="tools">
          <div className="add-to-cart" onClick={addProductToCart}>
            <FiShoppingCart />
            <span>ADD TO CART</span>
          </div>
          <div className="icon">
            <AiOutlineHeart />
          </div>
          <div className="icon">
            <BiShowAlt />
          </div>
        </div>
        <Link to={"/product/" + item._id}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <span className="title">
        {item.title.substring(0, 50)}
        {item.title.length > 50 ? ".." : null}
      </span>
      <div className="info">
        <span className="price">${item.price}</span>
        <div className="rating">
          <span>{item.rating}</span>
          <AiFillStar style={{ color: "#FDCC0D" }} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
