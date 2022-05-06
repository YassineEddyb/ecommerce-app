import React from "react";
import "./product-card.scss";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="product">
      <div className="image">
        <div className="tools">
          <div className="add-to-cart">
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
        <Link to="/product">
          <img src={require("../../images/slider-2.jpg")} alt={item.title} />
        </Link>
      </div>
      <span className="title">{item.title}</span>
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
