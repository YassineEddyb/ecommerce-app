import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./product-page.scss";

import ProductContext from "../../context/productsContext";
import Button from "../../components/button/button";
import ProductGalory from "../../components/product-galory/product-galory";
import Quantity from "../../components/quantity/quantity";
import UserContext from "../../context/userContext";
import PopularPorducts from "../../components/popular-products/popular-porducts";

function ProductPage() {
  const { user, setUser } = useContext(UserContext);
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((e) => e._id == id);
  let [quantity, setQuantity] = useState(product?.quantity || 0);

  const addProductToCart = async () => {
    let el;
    if ((el = user.cart?.find((el) => el.product._id == product._id))) {
      el.quantity += quantity;
      setUser({ ...user, cart: [...user.cart] });
    } else if (user.cart)
      setUser({
        ...user,
        cart: [...user.cart, { product, quantity }],
      });
  };

  return (
    <div className="product-page">
      <div className="flex-container">
        <ProductGalory images={product.images} />
        <div className="details">
          <h3 className="title">{product.title}</h3>
          <h4 className="price">$ {product.price}</h4>
          <div className="quantity-title">
            <span>Quantity:</span>
            <Quantity
              className="quantity-cmp"
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
          <Button value="Add To Cart" clickHandler={addProductToCart} />
          <div className="desc">
            <span>Description</span>
            <p>{product.desc}</p>
          </div>
        </div>
      </div>
      <PopularPorducts title="People Also Buy" />
    </div>
  );
}

export default ProductPage;
