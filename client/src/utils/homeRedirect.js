import React, { useContext } from "react";

import { Outlet } from "react-router";

import GlobalContext from "../context/globalContext";
import Home from "../pages/home/home";

const HomeRedirect = () => {
  const { isAuth } = useContext(GlobalContext);

  return isAuth ? <Home /> : <Outlet />;
};

export default HomeRedirect;
