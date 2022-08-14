import React, { useContext } from "react";

// components
import "./Category.css";
import OneCategory from "./OneCategory"
import { FavItemContext } from "../providers/FavItemProvider";


const Category = (props) => {
  const { addItemInList } = useContext(FavItemContext);
  const { productList } = props;
  return (
    <div>
      {Object.keys(productList).map((key) => (
        <OneCategory productList={productList} category={key} addItem={item => addItemInList(item)} key={key}/>
      ))}
    </div>
  );
};

export default Category;