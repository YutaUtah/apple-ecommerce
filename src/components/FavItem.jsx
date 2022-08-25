import React, { useContext } from "react";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";

import { UserContext } from "../providers/ContextProvider";



const ItemButton = (props) => {
  const { removeFavItem, removeCartItem} = useContext(UserContext);

  const { item } = props;
  const changeFavState = ()=> {
    console.log('click')
    removeFavItem();
  }

    return (
      <Box
        sx={{display: "flex",　justifyContent: "center",
              p: 1,
            //   mx: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            }}>
        <Typography variant="h6">
          <Button　style={{ minWidth: "170px", minHeight: "30px" }}　variant="contained" onClick={() => changeFavState()}　>
            {props.buttonTitle}
          </Button>
        </Typography>
      </Box>
    );
  };


export const FavItem = (props) => {

  const { item } = props;

  const displayPrice = (price) => {
    return `$${price}`
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} key={item.productName} >
      <Card
        sx={{ minHeight: 250, minWidth: 800, mb: 1, display: "flex", alignItems: "center", justifyContent: "space-between", border: "solid" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <CardMedia component="img" height="300" width="200" image={item.image} alt={item.productName} sx={{m:2}}/>
          </Grid>
          <Grid item xs={6} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minWidth: "370px"}} >
            <Typography gutterBottom variant="h5" component="div">
              {item.productName}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}
            sx={{display: "flex",justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h5" color="text.secondary" sx={{display: "column", textAlign: "end", mx: 20 }}>
              <div className="text-end mx-2">{displayPrice(item.price)}</div>
              <ItemButton buttonTitle="Remove Favorite" item={item}/>
              <ItemButton buttonTitle="Remove from Cart" />
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
