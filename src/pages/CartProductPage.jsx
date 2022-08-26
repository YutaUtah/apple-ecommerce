// React
import React, { useContext } from "react";

// components
import { UserContext } from "../providers/ContextProvider";
import { CartItem } from "../components/CartItem";
import { Header } from "../components/Header";
import { Container, Typography } from "@mui/material";

export const CartProductPage = () => {
  const { cartList } = useContext(UserContext);

  return (
    <div>
      <Header />
      <Container>
        <Typography sx={{ textAlign: "start", mb: 5}} variant="h4">
          Cart List
        </Typography>
        {Object.keys(cartList).map((key) => {
          return (
            <div>
              {cartList[key].map((value) => (
                <div>
                  <CartItem item={value} />
                </div>
              ))}
            </div>
          );
        })}
      </Container>
    </div>
  );
};