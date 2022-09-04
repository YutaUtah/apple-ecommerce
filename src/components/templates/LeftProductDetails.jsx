// React
import { CardMedia } from "@mui/material";
import React from "react";


export const LeftProductDetails = (props) => {

  const { product } = props;

  return (
    <div>
      <div className="d-flex justify-content-center">
      <CardMedia component="img"  image={"/"+ product.image} alt={product.productName} sx={{height:"60%", width:"60%" }}/>
      </div>
      <div className="d-flex p-2 justify-content-between">
        <h2>{product.productName}</h2>
        <h3>${product.price}</h3>
      </div>
      <div className="p-2">
        <p>{product.description}</p>
      </div>
    </div>
  );
};