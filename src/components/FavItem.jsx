// React
import React, { useContext } from "react";

// material UI
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

// Components
import { UserContext } from "../providers/ContextProvider";
import { PrimaryButton } from "./buttons/PrimaryButton";

export const FavItem = (props) => {

  const { item } = props;
  const { removeFavItem, addCartItem, displayPrice, styles } = useContext(UserContext);
  const imageURL = "/" + item.image;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} key={item.productName} >
      <Card
        sx={{ minHeight: 250, minWidth: 800, mb: 1, display: "flex", alignItems: "center", justifyContent: "space-between", border: "solid" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <CardMedia component="img" height="300" width="200" image={imageURL} alt={item.productName} sx={{m:2}}/>
          </Grid>
          <Grid item xs={6} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minWidth: "370px"}} >
            <Typography gutterBottom variant="h4" component="div">
              {item.productName}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}
            sx={{display: "flex",justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h5" color="text.secondary" sx={{display: "column", textAlign: "end", mx: 20 }}>
              <div className="text-end mx-3">{displayPrice(item.price)}</div>
              <PrimaryButton buttonTitle="Remove Favorite"  changeItemState={() => removeFavItem({item})} boxStyles={styles.favButtonStyles} buttonStyles={styles.buttonStyles}/>
              <PrimaryButton buttonTitle="Add to Cart"  changeItemState={() => addCartItem({item})} boxStyles={styles.favButtonStyles} buttonStyles={styles.buttonStyles}/>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
