import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getBasketTotal } from "../functions/cart";

function Subtotal() {
  const [price, setPrice] = useState(0);
  const { basket } = useSelector((state) => ({ ...state }));

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
