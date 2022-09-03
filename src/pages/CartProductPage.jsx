// React
import React, { useContext } from "react";

// css
import "../App.css"

// Material UI
import { Box, Card, Container, Typography } from "@mui/material";

// components
import { UserContext } from "../providers/ContextProvider";
import { CartItem } from "../components/CartItem";
import { PrimaryButton } from "../components/buttons/PrimaryButton";
import { TotalBox } from "../components/boxes/TotalBox";


export const CartProductPage = () => {

  const { cartList, proceedPayItem, changeQuantity, totalPriceCalculator, styles } = useContext(UserContext);

  return (
    <div>
      <Container>
        <h1>Cart List</h1>
        <Box sx={{display: "flex", my: 5}}>
          { ( Object.keys(cartList).length === 0 ) ? <div><h1 className="display-5">Your cart is currently empty</h1></div>:
          <>
            <CartItemList cartList={cartList} changeQuantity={changeQuantity}/>
            <Card sx={{ minWidth: "400px", maxHeight: "150px" , border: "solid", ml:2}}>
              <Typography variant="h5" color="text.secondary" sx={{ display: "column",  mx: 1 }}>
                  <TotalBox price={totalPriceCalculator(cartList)}/>
                <div className="mx-3 mt-4">
                  <PrimaryButton buttonTitle="Proceed Item" changeItemState={()=>proceedPayItem(cartList)} boxStyles={styles.productBoxStyles} buttonStyles={styles.buttonStyles}/>
                </div>
              </Typography>
            </Card>
          </>
          }
        </Box>
      </Container>
    </div>
  );
};

const CartItemList = (props) => {

  const { cartList, changeQuantity } = props;

  return (
    <div>
      {Object.keys(cartList).map((key) => {
        return (
          <div>
            {cartList[key].map((value) => (
              <CartItem item={value} changeQuantity={changeQuantity} key={value.productName}/>
            ))}
          </div>
        );
      })}
    </div>
  )
}