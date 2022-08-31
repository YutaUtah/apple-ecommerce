// React
import React, { useContext } from "react";

// components
import { UserContext } from "../providers/ContextProvider";
import { CartItem } from "../components/CartItem";
import { Box, Card, Container } from "@mui/material";

export const CartProductPage = () => {

  const { cartList } = useContext(UserContext);

  console.log(cartList)

  return (
    <div>
      <Container >
        <h1>Cart List</h1>
        <Box sx={{display: "flex", my:5}}>
          { ( Object.keys(cartList).length === 0 ) ? <div><h1 className="display-5">Your cart is currently empty</h1></div>:
          <>
            <CartItemList cartList={cartList}/>
            <Card sx={{ minWidth: "220px", maxHeight: "400px" , display: "flex", border: "solid" }}>ee</Card>
          </>
          }
        </Box>
      </Container>
    </div>
  );
};

const CartItemList = (props) => {

  const { cartList } = props;

  return (
    <div>
      {Object.keys(cartList).map((key) => {
        return (
          <div>
            {cartList[key].map((value) => (
              <CartItem item={value} key={value.productName}/>
            ))}
          </div>
        );
      })}
    </div>
  )
}