import React from "react";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const PriceBox = () => {
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
      <Typography variant="h6">Price</Typography>
      <Typography variant="h6">$1000</Typography>
    </Box>
  );
};

const QuantityBox = () => {
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
          <Select
            labelId="quantity"
            id="quantity"
            label="quantity"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        p: 1,
        mx: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Typography variant="h6">
        <Button
          style={{ minWidth: "170px", minHeight: "30px" }}
          variant="contained"
        >
          {props.buttonTitle}
        </Button>
      </Typography>
    </Box>
  );
};

const RightProductDetail = () => {
  return (
    <div>
      <PriceBox />
      <QuantityBox />
      <TotalBox />
      <ItemButton buttonTitle="Add Favorite" />
      <ItemButton buttonTitle="Add Cart" />
      <ItemButton buttonTitle="Go To Cart Page" />
    </div>
  );
};

export default RightProductDetail;