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
        <Typography sx={{ textAlign: "start", mb: 5}} variant="h4">
          Cart List
        </Typography>
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