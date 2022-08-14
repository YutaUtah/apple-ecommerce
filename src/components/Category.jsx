import React, { useState, useContext } from "react";
// components
import "./Category.css";
import productList from "../data/productList.js";
import OneCategory from "./OneCategory"


const Category = () => {
  const [item, setItem] = useState('Category');
  const [favList, setFavList] = useState([]);

  const addItemInList = (item) => {
    setItem(item)
    const newFavList = [...favList, item];
    setFavList(newFavList)
  }
  console.log(favList)
  return (
    <div>
      {Object.keys(productList).map((key) => (
        <OneCategory productList={productList} category={key} addItem={item => addItemInList(item)} key={key}/>
      ))}
    </div>
  );
};

export default Category;