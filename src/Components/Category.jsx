import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVOURITE,
} from "../ReduxToolkit/ProductSlice";
const Category = (props) => {
  const cartItems = useSelector((state) => state.cart.carts);
  const favItems = useSelector((state)=> state.Favourite.items)

  const dispatch = useDispatch();
  const { image, price, title, rating } = props.data;

  function HandleFav(product){
    const item = favItems.some((item) => item.id == product.id);
    if (item) {
      return (
        <p
          class="bi bi-heart-fill"
          onClick={() => dispatch(REMOVE_FROM_FAVOURITE(product))}
          style={{color: "red", marginRight:'90%' }}
        ></p>
      );  
    } else
      return (
        <p
          class="bi bi-heart-fill"
          onClick={() => dispatch(ADD_TO_FAVOURITE(product))}
          style={{color: "black" }}
        ></p>
      );
  };
  function handleButton(product){
    const item = cartItems.some((item) => item.id == product.id);
    if(item){
      return(<button
      style={{
        backgroundColor:'red',
        color: "white",
      }}
      onClick={() => dispatch(REMOVE_FROM_CART(product))}
      className="btn btn-primary btn-block w-100 my-2"
    >
      <i class="bi bi-cart3 mx-2" style={{ Color: "white" }}></i>
      Remove from cart
    </button>)
    }
    else return(<button
      style={{
        backgroundColor:'blue',
        color: "white",
      }}
      onClick={() => dispatch(ADD_TO_CART(product))}
      className="btn btn-primary btn-block w-100 my-2"
    >
      <i class="bi bi-cart3 mx-2" style={{ Color: "white" }}></i>
      Add to cart
    </button>)


  }
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
        <div className="card">
          <p style={{margin:'1px 1px 1px 92%'}}>{HandleFav(props.data)}</p>
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
            {handleButton(props.data)}
          </div>
        </div>
        </div>
    </>
  );
};
export default Category;
