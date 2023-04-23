import React, { useContext } from "react";

import { Outlet } from "react-router";

import GlobalContext from "../context/globalContext";
import Login from "../pages/login/login";

const ProtectedRoutes = () => {
  const { isAuth } = useContext(GlobalContext);

  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
