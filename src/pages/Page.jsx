// React
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";

// Components
import { CartProductPage } from "./CartProductPage";
import { DefaultProductPage } from "./DefaultPage";
import { FavoriteProductPage } from "./FavoriteProductPage";
import { ProductInfoPage } from "./ProductInfoPage";

export const Page = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="apple-ecommerce/" element={<DefaultProductPage />} />
        <Route path="apple-ecommerce/products/:productName/" element={<ProductInfoPage/>} />
        <Route path="apple-ecommerce/favorites/" element={<FavoriteProductPage/>} />
        <Route path="apple-ecommerce/cart/" element={<CartProductPage/>} />
      </Routes>
    </>
  );
};
