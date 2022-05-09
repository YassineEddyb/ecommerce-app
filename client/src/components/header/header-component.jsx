import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import "./header.styles.scss";
import SideBarCart from "../SideBarCart/SideBarCart";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          <h1>LOGO</h1>
        </Link>
        <nav>
          <div className="icon search">
            <FiSearch />
          </div>
          <div className="icon cart" onClick={toggleSideBar}>
            <FiShoppingBag />
          </div>
          <div className="icon user">
            <FiUser />
            <div className="drop">
              <Link className="auth login" to="/login">
                <IoMdLogIn className="icon" />
                Login
              </Link>
              <Link className="auth signup" to="/signup">
                <FaRegUserCircle className="icon" />
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <SideBarCart sideBar={sideBar} toggleSideBar={toggleSideBar} />
    </>
  );
};

export default Header;
