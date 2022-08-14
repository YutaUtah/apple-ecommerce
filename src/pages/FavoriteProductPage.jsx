import React from "react";

// components
import "../components/Category.css";
import productList from "../data/productList.js";
import OneCategory from "../components/OneCategory";

const FavoriteProductPage = () => {
  return (
    <div>
      {Object.keys(productList).map((key) => (
        <OneCategory productList={productList} category={key} key={key}/>
      ))}
    </div>
  );
};

export default FavoriteProductPage;
