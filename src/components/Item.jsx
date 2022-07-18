import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = (props) => {
  let item = props.item;

  function displayPrice (price) {
    return `From $${price}`
  }
  console.log(item.image);
  return (
    <Card sx={{ maxWidth: 345 , minWidth: 345, m: 2}}>
      <CardMedia
        component="img"
        height="300"
        width="500"
        image={item.image}
        alt="Product Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <strong>{item.productName}</strong>
        </Typography>
        <Typography disableGutters variant="h6" color="text.secondary" align="right">
          {displayPrice(item.price)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing  sx={{ justifyContent: 'flex-end' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AddCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
