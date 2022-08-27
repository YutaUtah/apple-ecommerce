// React
import React, { useContext } from "react";

// material UI
import { Box, Button, Typography, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { UserContext } from "../providers/ContextProvider";
import { Link } from "react-router-dom";

const PriceBox = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 1, m: 1, bgcolor: "background.paper", borderRadius: 1 }}>
      <Typography variant="h6">Price</Typography>
      <Typography variant="h6">$1000</Typography>
    </Box>
  );
};

const QuantityBox = () => {
  const quantityList = [1,2,3,4,5];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
        alignItems: "center",
        defaultaValue: 0,
      }}
    >
      <Typography variant="h6">Quantity</Typography>
      <Typography variant="h6">
        <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel id="quantity">quantity</InputLabel>
          <Select labelId="quantity" id="quantity" label="quantity" >
          {quantityList.map(num => ( <MenuItem value={num}>{num}</MenuItem> ))}
          </Select>
        </FormControl>
      </Typography>
    </Box>
  );
};

const TotalBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Typography variant="h6">Total</Typography>
      <Typography variant="h6">$1000</Typography>
    </Box>
  );
};

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

export const RightProductDetail = (props) => {
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