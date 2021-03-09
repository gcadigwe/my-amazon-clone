import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import CheckoutProduct from "../CheckOutProduct/CheckoutProduct";

function Checkout() {
  const { basket } = useSelector((state) => ({ ...state }));
  const word = basket.user?.email.split("@");
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checout ad"
        />
        <div>
          <h3>Hello, {basket.user ? word[0] : "Guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket?.basket.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
