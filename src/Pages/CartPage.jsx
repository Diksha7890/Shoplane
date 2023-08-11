import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import CartItems from "../Components/CartItems";
import { useSelector } from "react-redux";
const CartPage = () => {
  const items = useSelector((state) => state.cart.carts);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const [orderTotal,setOrderTotal]=useState([]);
  useEffect(()=>{
    setOrderTotal(subTotal+10);
  },[]);
  return (
    <>
      <Header />
      <Navbar />
      <div className="row  ">
        <div className="col-md-9">
          <div className="row border my-1 mx-1" style={{ borderRadius: "5px" }}>
            {items.length === 0 ? (
              <div className="emptyCart">
                <h1>No items in your cart</h1>
                <h1
                  className="bi bi-emoji-frown"
                  style={{ fontSize: "50px" }}
                ></h1>
              </div>
            ) : (
              items.map((product, index) => (
                <CartItems key={index} data={product} />
              ))
            )}
          </div>
        </div>
        <div className="col-md-3">
          {items.length > 0 ? (
            <div className="container border my-1">
              <b
                style={{
                  display: "flex",
                  margin: "8px",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                Order-Summary
              </b>
              <div className="price-box my-3">
                <div className="subtotal">
                  <p>Subtotal</p>
                  <p>$ {subTotal.toFixed(2)}</p>
                </div>
                <div className="shipping-Estimate">
                  <p>Shipping Estimate</p>
                  <p>$ 5</p>
                </div>
                <div className="tax-Estimate">
                  <p>Tax Estimate</p>
                  <p>$ 5</p>
                </div>
                <div className="Order-total">
                  <p>Order Total</p>
                  <p>${(subTotal+10).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default CartPage;
