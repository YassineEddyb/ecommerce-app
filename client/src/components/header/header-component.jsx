import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <Link className="login" to="/signup">
          Login
        </Link>
        <Link className="signup" to="/login">
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
