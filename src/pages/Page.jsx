// React
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";

// Components
import { CartProductPage } from "./CartProductPage";
import { DefaultProductPage } from "./DefaultPage";
import { FavoriteProductPage } from "./FavoriteProductPage";
import { ProductInfo } from "./ProductInfo";

export const Page = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DefaultProductPage />} />
        <Route path="products/:productName/" element={<ProductInfo/>} />
        <Route path="favorites/" element={<FavoriteProductPage/>} />
        <Route path="cart/" element={<CartProductPage/>} />
      </Routes>
    </>
  );
};
