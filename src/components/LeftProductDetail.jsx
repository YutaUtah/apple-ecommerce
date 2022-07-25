import React from "react";
import productList from "../data/productList";

import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
}));

const LeftProductDetail = () => {
  return (
    <div>
      <img src={"images/macbook-air-m1.jpeg"} height="300" width="350" />
      <h2>MacBook Air with M1 chip</h2>
      <Item>
        <p>{productList.Mac[0]["description"]}</p>
      </Item>
    </div>
  );
};

export default LeftProductDetail;
