import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product-page.scss";

import ProductContext from "../../context/productsContext";
import Button from "../../components/button/button";
import ProductGalory from "../../components/product-galory/product-galory";
import Quantity from "../../components/quantity/quantity";
import UserContext from "../../context/userContext";
import PopularPorducts from "../../components/popular-products/popular-porducts";
import axios from "../../utils/axiosConfig";
import GlobalContext from "../../context/globalContext";

function ProductPage() {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  let [quantity, setQuantity] = useState(product?.quantity || 0);

  useEffect(() => {
    fetchProduct();
  });

  const addProductToCart = async () => {
    let el;
    if ((el = user.cart?.find((el) => el.product._id === product._id))) {
      el.quantity += quantity;
      setUser({ ...user, cart: [...user.cart] });
    } else if (user.cart)
      setUser({
        ...user,
        cart: [...user.cart, { product, quantity }],
      });
  };

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`api/products/${id}`);
      setProduct(res.data.product);
    } catch (error) {
      // console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="product-page">
      {!product ? (
        <div>Loading...</div>
      ) : (
        <div className="flex-container">
          <ProductGalory picture={product.picture} images={product.images} />
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
      )}
      <PopularPorducts title="People Also Buy" />
    </div>
  );
}

export default ProductPage;
