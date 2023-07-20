import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVOURITE,
} from "../ReduxToolkit/ProductSlice";
const Category = (props) => {
  const [heartColor, setColor] = useState("black");
  const [buttonColor, setButtonColor] = useState({
    text: "Add to Cart",
    color: "blue",
  });

  const dispatch = useDispatch();
  const { image, price, title, rating } = props.data;

  const handleItems = (product) => {
    if (buttonColor.color == "blue") {
      setButtonColor({
        color: "red",
        text: "Remove from Cart",
      });
      dispatch(ADD_TO_CART(product));
    } else {
      setButtonColor({
        text: "Add to Cart",
        color: "blue",
      });
      dispatch(REMOVE_FROM_CART(product));
    }
  };
  const handleFav = (product) => {
    if (heartColor == "black") {
      setColor("red");
      dispatch(ADD_TO_FAVOURITE(product));
    } else {
      setColor("black");
      dispatch(REMOVE_FROM_FAVOURITE(product));
    }
  };
  const titleLimit = (str, limit) => {
    if (str.length > limit) {
      let words = str.split("");
      words = words.slice(0, limit);
      words = words.join("");
      return words;
    } else return str;
  };
  const text = titleLimit(title, 21);
  return (
    <>
      <div className="col-md-3 my-2 ">
        <div className="card" style={{ minHeight: "40vh" }}>
          <p
            class="bi bi-heart-fill"
            onClick={() => handleFav(props.data)}
            style={{ margin: "0px 0px 0px 92%", color: `${heartColor}` }}
          ></p>
          <img
            className="card-top-image"
            src={image}
            style={{
              height: "35vh",
              width: "40 vh",
              margin: "19px",
            }}
          />
          <hr />
          <div className="card-body" style={{ minHeight: "30vh" }}>
            <p className="card-title">
              <b>Brand, </b>
              {text + "...."}
            </p>
            <div className="price">
              <b>$ {price.toFixed(2)}</b>
            </div>
            <span
              className="star"
              style={{ fontSize: "23px", marginBottom: "3px" }}
            >
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </span>
            <span className="rating mx-3">({rating.count})</span>
            <button
              style={{
                backgroundColor: `${buttonColor.color}`,
                color: "white",
              }}
              onClick={() => handleItems(props.data)}
              className="btn btn-primary btn-block w-100 my-2"
            >
              <i class="bi bi-cart3 mx-2" style={{ Color: "white" }}></i>
              {buttonColor.text}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
