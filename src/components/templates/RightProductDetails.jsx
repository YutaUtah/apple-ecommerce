// React
import React, { useContext } from "react";

// material UI
import { Box, Button, Typography } from "@mui/material";
import { UserContext } from "../../providers/ContextProvider";
import { Link } from "react-router-dom";

// components
import { PriceBox } from "../boxes/PriceBox";
import { QuantityBox } from "../boxes/QuantityBox";
import { TotalBox } from "../boxes/TotalBox";


const ItemButton = (props) => {
  const { changeItemClick } = props;
  return (
    <Box
      sx={{ display: "flex", justifyContent: "end", p: 1, mx: 1, bgcolor: "background.paper", borderRadius: 1 }} >
      <Typography variant="h6">
        <Button
          style={{ minWidth: "170px", minHeight: "30px" }}
          variant="contained"
          onClick={changeItemClick}
        >
          {props.buttonTitle}
        </Button>
      </Typography>
    </Box>
  );
};

export const RightProductDetails = (props) => {
  const { item } = props;
  const { addFavItem, addCartItem } = useContext(UserContext);

  return (
    <div>
      <PriceBox />
      <QuantityBox />
      <TotalBox />
      <ItemButton buttonTitle="Add Favorite" changeItemClick={() => addFavItem({item})}/>
      <ItemButton buttonTitle="Add Cart" changeItemClick={() => addCartItem({item})}/>
      <Link to={`/cart`} >
        <ItemButton buttonTitle="Go To Cart Page" />
      </Link>
    </div>
  );
};