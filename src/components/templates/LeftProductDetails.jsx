// React
import React from "react";


export const LeftProductDetails = (props) => {

  const { product } = props;

  return (
    <div>
      <div className="d-flex justify-content-center">
      <img src={product.image} height="300" width="350" />
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