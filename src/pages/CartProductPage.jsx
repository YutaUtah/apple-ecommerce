// React
import React, { useContext } from "react";

// css
import "../App.css"

// components
import { UserContext } from "../providers/ContextProvider";
import { CartItem } from "../components/CartItem";
import { Box, Card, Container, Typography } from "@mui/material";
import { PrimaryButton } from "../components/buttons/PrimaryButton";


export const CartProductPage = () => {

  const { cartList, styles } = useContext(UserContext);

  return (
    <div>
      <Container>
        <h1>Cart List</h1>
      </Container>
      <div className="cartList-display">
        <Box sx={{display: "flex", my: 5}}>
          { ( Object.keys(cartList).length === 0 ) ? <div><h1 className="display-5">Your cart is currently empty</h1></div>:
          <>
            <CartItemList cartList={cartList}/>
            <Card sx={{ minWidth: "400px", maxHeight: "340px" , border: "solid"}}>
              <Typography variant="h5" color="text.secondary" sx={{ display: "column",  m: 3 }}>
                <div className="d-flex justify-content-between">
                  <div>Quantity</div>
                  <div>Quantity</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Quantity</div>
                  <div>Quantity</div>
                </div>
                <div>
                <PrimaryButton buttonTitle="Proceed Item" boxStyles={styles.productBoxStyles} buttonStyles={styles.buttonStyles}/>
                </div>
              </Typography>
            </Card>
          </>
          }
        </Box>
      </div>
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