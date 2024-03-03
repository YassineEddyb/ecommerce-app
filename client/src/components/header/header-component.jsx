import React, { useState, useContext } from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

import UserContext from "../../context/userContext";
import SideBarCart from "../SideBarCart/SideBarCart";
import GlobalContext from "../../context/globalContext";

import CategoryList from "../categoryLIst/categoryList";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { isAuth, setIsAuth, sideBar, setSideBar } = useContext(GlobalContext);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  const handleLogout = () => {
    setUser({});
    setIsAuth(false);
    localStorage.setItem("jwt", null);
  };

  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          <h1>STYILO</h1>
        </Link>
        <CategoryList />
        <nav>
          <Link className="icon search" to="/shop">
            <FiSearch />
          </Link>
          <div className="icon cart" onClick={toggleSideBar}>
            {user.cart?.length > 0 ? (
              <div className="count">{user.cart.length}</div>
            ) : null}
            <FiShoppingBag />
          </div>
          <div className="icon user">
            <FiUser />
            <div className="drop">
              {!isAuth ? (
                <>
                  <Link className="auth login" to="/login">
                    <IoMdLogIn className="icon" />
                    Login
                  </Link>
                  <Link className="auth signup" to="/signup">
                    <FaRegUserCircle className="icon" />
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link className="auth login" to="/account">
                    <RiAccountCircleFill className="icon" />
                    Profile
                  </Link>
                  <Link onClick={handleLogout} className="auth signup" to="/">
                    <BiLogOutCircle className="icon" />
                    Logout
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <SideBarCart sideBar={sideBar} toggleSideBar={toggleSideBar} />
    </>
  );
};

export default Header;
