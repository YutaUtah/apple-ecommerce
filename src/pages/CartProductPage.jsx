// React
import React, { useContext } from "react";

// components
import { UserContext } from "../providers/ContextProvider";
import { CartItem } from "../components/CartItem";
import { Container, Typography } from "@mui/material";

export const CartProductPage = () => {

  const { cartList } = useContext(UserContext);

  return (
    <div>
      <Container>
        <h1>Cart List</h1>
        {Object.keys(cartList).map((key) => {
          return (
            <div>
              {cartList[key].map((value) => (
                <div>
                  <CartItem item={value} key={value.productName}/>
                </div>
              ))}
            </div>
          );
        })}
      </Container>
    </div>
  );
};