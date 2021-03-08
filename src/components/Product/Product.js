import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";

function Product({ title, image, price, rating, id }) {
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch({
      type: "SET_BASKET",
      payload: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addProduct}>Add to Basket</button>
    </div>
  );
}

export default Product;
