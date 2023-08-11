import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../Apis/Endpoints";
import Category from "./Category";
const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch();
  },[]);
  const fetch=()=>{
    axios
    .get(Endpoints.PRODUCT_URL)
    .then((response) => {
      console.log(response.data);
      setCategories(response.data);
    })
    .catch((error) => console.log(error));
  }

  return (
    <div className="row">
      {categories.map((item, index) => (
        <Category key={index} data={item} />
      ))}
    </div>
  );
};
export default CategoriesList;
