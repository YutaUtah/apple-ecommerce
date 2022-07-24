import React from "react";

import { Routes, Route } from "react-router-dom";
import DefaultProductPage from "./DefaulProductPage";

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultProductPage />}/>
      </Routes>
    </div>
  );
};

export default Page;
