import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <hr />
      <div className="row mx-5">
        <div className="col">
          <Link className="navLink " to={"/"}>
            All
          </Link>
        </div>
        <div className="col ">
          <Link className="navLink" to={"/products/jewelery"}>
            Jewelery
          </Link>
        </div>
        <div className="col">
          <Link className="navLink" to={"/products/electronics"}>
            Electronics
          </Link>
        </div>
        <div className="col">
          <Link className="navLink" to={"/products/mensClothing"}>
            Mens' Clothing
          </Link>
        </div>
        <div className="col">
          <Link className="navLink" to={"/products/womensClothing"}>
            Women's Clothing
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Navbar;
