import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./checkout.scss";

import CheckoutProduct from "../../components/checkout-product/checkoutProduct";
import UserContext from "../../context/userContext";
import Button from "../../components/button/button";
import CheckoutForm from "../../components/checkoutForm/checkoutForm";

import axios from "../../utils/axiosConfig";

const stripePromise = loadStripe(
  "pk_test_51IgrtbDCbutMDYEGTPXhC75UBTNlRs1OqWKnmd8zsq8y6bd7u9xp7fXU0Mp8K8sxlkxaQAS2QDRSdQLfnLBLF2GR00czCDjGuT"
);

function Checkout() {
  const { user } = useContext(UserContext);
  const [payment, setPayment] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const res = await axios.post("/api/payment", { cart: user.cart || [] });
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        // console.log(err);
      }
    };

    fetchClientSecret();
  }, [user]);

  const handleClick = () => {
    setPayment((prevState) => !prevState);
  };

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#51a767",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="checkout">
      {!payment ? (
        <div>
          <div className="titles">
            <h4>Products Summary</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </div>
          <div display="checkout-table">
            {user.cart?.map((el, idx) => {
              return <CheckoutProduct key={idx} item={el} />;
            })}
          </div>
          <div className="pay-now">
            <div className="total-price">
              <h4>TOTAL PRICE</h4>
              <span>
                $
                {user.cart
                  ?.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <Button value="PAY WITH CART" clickHandler={handleClick} />
          </div>
        </div>
      ) : (
        clientSecret && (
          <div className="payment">
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        )
      )}
    </div>
  );
}

export default Checkout;
