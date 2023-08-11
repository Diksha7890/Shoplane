import React, { useState } from "react";
import {
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "../ReduxToolkit/ProductSlice";
import { useDispatch } from "react-redux";

const CartItems = (props) => {
  const { image, title, price, rating } = props.data;
  const [quantity, setquantity] = useState(1);
  const dispatch = useDispatch();
  const RemoveItems = (product) => {
    dispatch(REMOVE_FROM_CART(product.data));
  };
  const titleLimit = (str, limit) => {
    if (str.length > limit) {
      let words = str.split("");
      words = words.slice(0, limit);
      words = words.join("");
      return words;
    } else return str;
  };
  const text = titleLimit(title, 40);

  const handleIncrement = (product) => {
    setquantity(quantity + 1);
    dispatch(INCREMENT(product));
  };
  const handleDecrement = (product) => {
    if (quantity > 1) {
      setquantity(quantity - 1);
      dispatch(DECREMENT(product));
    }
  };

  return (
    <>
      <div className="col-md-3 mx-3">
        <img
          src={image}
          style={{ width: "30vh", height: "35vh", margin: "10px" }}
        />
      </div>
      <div className="col-md-6 mx-5">
        <div className="card-body" style={{ display: "block" }}>
          <p className="card-title my-3" style={{ fontSize: "19px" }}>
            <b>Brand,</b>
            <br />
            {text}
          </p>
          <div className="buttons">
            <b class="item-quantity"> Quantity </b>
            <button
              className="Quantity-button"
              onClick={() => handleDecrement(props.data)}
            >
              -
            </button>
            <b class="quantity" style={{ fontSize: "20px", marginLeft: "2px" }}>
              {quantity}
            </b>
            <button
              className="Quantity-button"
              onClick={() => handleIncrement(props.data)}
            >
              +
            </button>
          </div>
          <div className="item">
            <span className="star" style={{ fontSize: "23px" }}>
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </span>
            <span className="rating mx-2">({rating.count})</span>
            <i
              class="bi bi-trash3"
              style={{ marginLeft: "56%", fontSize: "20px" }}
              onClick={() => RemoveItems(props)}
            ></i>
          </div>
          <div className="price my-3">
            <b style={{ fontSize: "20px" }}>${price.toFixed(2)}</b>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
export default CartItems;
