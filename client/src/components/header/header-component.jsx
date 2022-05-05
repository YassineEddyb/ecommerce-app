import React from "react";
import { Link } from "react-router-dom";

import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <h1>LOGO</h1>
      </Link>
      <nav>
        <Link className="icon search" to="/shop">
          <FiSearch />
        </Link>
        <Link className="icon cart" to="/shop">
          <FiShoppingBag />
        </Link>
        <Link className="icon user" to="/shop">
          <FiUser />
          <div className="drop">
            <Link className="auth login" to="/signup">
              <IoMdLogIn className="icon" />
              Login
            </Link>
            <Link className="auth signup" to="/login">
              <FaRegUserCircle className="icon" />
              Sign Up
            </Link>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
