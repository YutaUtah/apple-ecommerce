// React
import React, { useContext } from "react";

// components
import { Category } from "../components/Category.jsx";
import { Header } from "../components/Header.jsx";
import { UserContext } from "../providers/ContextProvider";

export const DefaultProductPage = () => {
  const { productList } = useContext(UserContext);

  return (
    <div>
      <Header />
      <Category productList={productList}/>
    </div>
  );
};