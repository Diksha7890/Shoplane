import React from "react";
import { REMOVE_FROM_FAVOURITE } from "../ReduxToolkit/ProductSlice";
import { useDispatch } from "react-redux";

const FavouriteItems = (props) => {
  const { image, title, price, rating } = props.data;
  const dispatch = useDispatch();
  const RemoveItem = (product) => {
    dispatch(REMOVE_FROM_FAVOURITE(product));
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
      <div className="col-md-3 my-2">
        <div className="card" style={{ minHeight: "30vh" }}>
          <p
            class="bi bi-heart-fill"
            style={{
              margin: "0px 2px 0px 90% ",
              color: "red",
              fontSize: "18px",
            }}
          ></p>
          <img
            className="card-top-image"
            src={image}
            style={{
              height: "33vh",
              minWidth: "30vh",
              margin: "12px",
            }}
          />
          <hr />
          <div className="card-body" style={{ minHeight: "20vh" }}>
            <p className="card-title">
              <b>Brand,</b>
              <br />
              {text + "..."}
            </p>
            <div className="price">
              <b style={{ fontSize: "16px" }}>$ {price.toFixed(2)}</b>
            </div>
            <span className="star" style={{ fontSize: "20px" }}>
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </span>
            <span className="rating mx-3">({rating.count})</span>
            <button
              onClick={() => RemoveItem(props.data)}
              className="btn btn-danger btn-block w-100"
            >
              <i class="bi bi-trash3 mx-3"></i>
              Remove from Favourite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FavouriteItems;
