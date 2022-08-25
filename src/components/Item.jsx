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
  const { addFavItem, addCartItem } = useContext(UserContext);
  const [modifiedFavItem, setModifiedItem] = useState(false)

  const displayPrice = (price) =>  `From $${price}`;

  const changeFavState = (item)=> {
    setModifiedItem(modifiedFavItem => !modifiedFavItem)
    addFavItem(item)
  }

  const changeCartState = (item)=> addCartItem(item)

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, m: 2 }}>
      <Link to={`/products/${item.linkName}/`}>
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
        <IconButton aria-label="share" onClick={() => changeCartState({item})} >
          <AddCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};