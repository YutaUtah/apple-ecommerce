// React
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"

// material UI
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import AddCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Components
import { UserContext } from "../providers/ContextProvider";

export const Item = (props) => {
  const { item } = props;
  const { addFavItem, addCartItem, displayPrice } = useContext(UserContext);
  const [ modifiedFavItem, setModifiedItem ] = useState(false)

  const changeFavState = (item)=> {
    setModifiedItem(modifiedFavItem => !modifiedFavItem)
    addFavItem(item)
  }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, m: 2 }}>
      <Link to={`/apple-ecommerce/products/${item.linkName}`}>
        <CardMedia component="img" height="300" width="500" image={item.image} alt="Product Image"/>
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong>{item.productName}</strong>
        </Typography>
        <Typography variant="h6" color="text.secondary" align="right">
          {displayPrice(item.price)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <IconButton aria-label="add to favorites" style={modifiedFavItem ? {color:'red'} : {color: 'darkgray'}} onClick={() => changeFavState({item})} >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => addCartItem({item})} >
          <AddCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};