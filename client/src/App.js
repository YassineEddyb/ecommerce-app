import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header-component";
import ProductPage from "./pages/product-page/product-page";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Shop from "./pages/shop/shop";
import SignUp from "./pages/sign-up/sign-up";
import Account from "./pages/account/account";

import { ProductProvider } from "./context/products";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
