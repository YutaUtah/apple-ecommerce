// React
import React, { useContext } from "react";
import { UserContext } from "../providers/ContextProvider";

// components
import { Category } from "../components/Category";
import { Header } from "../components/Header";

export const CartProductPage = () => {
  const { cartList } = useContext(UserContext);

  return (
    <div>
      <Header />
      <Category productList={cartList} />
    </div>
  );
};