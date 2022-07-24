import React from "react";
import { Routes, Route } from "react-router-dom";

import DefaultProductPage from "./DefaulProductPage";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultProductPage />} />
        <Route path="about" element={"Hello"} />
      </Routes>
    </>
  );
};

export default Page;
