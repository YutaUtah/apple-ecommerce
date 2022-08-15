// React
import React from "react";

// components
import "./Category.css";
import { OneCategory } from "./OneCategory"

export const Category = (props) => {
  const { productList } = props;

  return (
    <div>
      {Object.keys(productList).map((key) => (
        <OneCategory productList={productList} category={key} key={key}/>
      ))}
    </div>
  );
};

