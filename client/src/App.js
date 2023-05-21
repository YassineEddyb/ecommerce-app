import React, { useContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header-component";
import ProductPage from "./pages/product-page/product-page";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Shop from "./pages/shop/shop";
import SignUp from "./pages/sign-up/sign-up";
import Account from "./pages/account/account";

import { ProductProvider } from "./context/productsContext";
import { UserProvider } from "./context/userContext";
import ProtectedRoutes from "./utils/protectedRoutes";
import HomeRedirect from "./utils/homeRedirect";
import Loader from "./components/Loader/Loader";
import Checkout from "./pages/checkout/checkout";

import GlobalContext from "./context/globalContext";

function App() {
  const { initLoading } = useContext(GlobalContext);

  return (
    <div className="App">
      <ProductProvider>
        <UserProvider>
          {initLoading ? (
            <Loader />
          ) : (
            <HashRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<HomeRedirect />}>
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<SignUp />} />
                </Route>
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:category" element={<Shop />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route element={<ProtectedRoutes />}>
                  <Route exact path="/account" element={<Account />} />
                  <Route exact path="/checkout" element={<Checkout />} />
                </Route>
              </Routes>
              <Footer />
            </HashRouter>
          )}
        </UserProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
