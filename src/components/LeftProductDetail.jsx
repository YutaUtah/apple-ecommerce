import React from "react";
import productList from "../data/productList";

import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const DescriptionItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
}));

const ProductItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
}));

const LeftProductDetail = () => {
  return (
    <div>
      <img src={productList.Mac[0]["image"]} height="300" width="350" />
      <ProductItem>
        <h2>MacBook Air with M1 chip</h2>
        <h3>${productList.Mac[0]["price"]}</h3>
      </ProductItem>
      <DescriptionItem>
        <p>{productList.Mac[0]["description"]}</p>
      </DescriptionItem>
    </div>
  );
};

export default LeftProductDetail;
