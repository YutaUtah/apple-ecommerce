// React
import React from "react";

// material UI
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

export const LeftProductDetail = ({product}) => {
  return (
    <div>
      <img src={"/" + product.image} height="300" width="350" />
      <ProductItem>
        <h2>{product.productName}</h2>
        <h3>${product.price}</h3>
      </ProductItem>
      <DescriptionItem>
        <p>{product.description}</p>
      </DescriptionItem>
    </div>
  );
};