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

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { isAuth, setIsAuth } = useContext(GlobalContext);
  const [sideBar, setSideBar] = useState(false);

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
          <h1>LOGO</h1>
        </Link>
        <ul className="categories-list">
          <Link to="/shop" className="link">
            Men's
          </Link>
          <Link to="/shop" className="link">
            Women's
          </Link>
          <Link to="/shop" className="link">
            Kids
          </Link>
          <Link to="/shop" className="link">
            T-shirts
          </Link>
          <Link to="/shop" className="link">
            Hats
          </Link>
          <Link to="/shop" className="link">
            Jeans
          </Link>
          <Link to="/shop" className="link">
            Pants
          </Link>
          <Link to="/shop" className="link">
            Shoes
          </Link>
          <Link to="/shop" className="link">
            Shirts
          </Link>
        </ul>
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
