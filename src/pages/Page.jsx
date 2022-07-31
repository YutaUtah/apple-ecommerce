import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import DefaultProductPage from "./DefaulProductPage";
import ProductInfo from "./ProductInfo";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultProductPage />} />
        <Route path="products/:productName/" element={<ProductInfo/>} />
      </Routes>
    </>
  );
};

export default Page;