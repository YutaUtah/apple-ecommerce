// React
import React, { useContext } from "react";

// components
import "../components/Category.css";
import { Category } from "../components/Category";
import { Header } from "../components/Header";
import { UserContext } from "../providers/ContextProvider";

export const FavoriteProductPage = () => {
  const { favList } = useContext(UserContext);

  return (
    <div>
      <Header />
      <Category productList={favList} />
    </div>
  );
};