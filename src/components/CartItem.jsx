// React
import React, { useContext } from "react";

// material UI
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

// Components
import { UserContext } from "../providers/ContextProvider";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { QuantityBox } from "../components/boxes/QuantityBox";

export const CartItem = (props) => {

  const { item, changeQuantity } = props;
  const { removeCartItem, displayPrice, styles } = useContext(UserContext);

  const imageURL = item.image;

  return (
    <Box sx={{ display: "flex" }} key={item.productName} >
      <Card
        sx={{ maxWidth: "95%", minHeight: 250, minWidth: 900, mb: 3, display: "flex", alignItems: "center", justifyContent: "space-between", border: "solid" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <CardMedia component="img" height="300" width="200" image={imageURL} alt={item.productName} sx={{m:2}}/>
          </Grid>
          <Grid item xs={6} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minWidth: "370px" }} >
            <Typography gutterBottom variant="h5" component="div">
              {item.productName}
            </Typography>
          </Grid>
          <Grid item xs={6} md={2.5} sx={{display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h5" color="text.secondary" sx={{display: "column", textAlign: "end"}}>
                  {displayPrice(item.price)}
                  <QuantityBox changeQuantity={(event)=>changeQuantity(event, item)}/>
                  <PrimaryButton buttonTitle="Remove from Cart" changeItemState={() => removeCartItem({item})} boxStyles={styles.productBoxStyles} buttonStyles={styles.buttonStyles}/>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};