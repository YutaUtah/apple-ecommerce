import React, { useContext } from "react";

// components
import "../components/Category.css";
import Category from "../components/Category";
import Header from "../components/Header";
import { FavItemContext } from "../providers/FavItemProvider";

const FavoriteProductPage = () => {
  const { favList } = useContext(FavItemContext);

  return (
    <div>
      <Header />
      <Category productList={favList} />
    </div>
  );
};

export default FavoriteProductPage;
