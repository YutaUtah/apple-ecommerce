// React
import React, { useContext } from "react";
import { Category } from "../components/Category";
import { UserContext } from "../providers/ContextProvider";

export const DefaultProductPage = () => {
  const { productList } = useContext(UserContext);

  return (
    <div>
      {Object.keys(productList).map((key) => (
        <Category productList={productList} category={key} key={key}/>
      ))}
    </div>
  );
};