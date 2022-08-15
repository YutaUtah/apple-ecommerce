// React
import React, { useContext } from "react";
import { UserContext } from "../providers/ContextProvider";

// components
import "../components/Category.css";
import { Category } from "../components/Category";
import { Header } from "../components/Header";

export const CartProductPage = () => {
  const { cartList } = useContext(UserContext);
  console.log(cartList)
  return (
    <div>
      <Header />
      <Category productList={cartList} />
    </div>
  );
};