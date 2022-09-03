// React
import React from "react";

// Material UI
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

export const QuantityBox = (props) => {

    const quantityList = [1,2,3,4,5];
    const { changeQuantity } = props;

    return (
      <Box
        sx={{
          py: 1,
          borderRadius: 1,
          defaultaValue: 1,
        }}
      >
        <Typography variant="h6">
          <FormControl sx={{ minWidth: 100 }} size="small">
            <InputLabel id="quantity">quantity</InputLabel>
            <Select labelId="quantity" id="quantity" label="quantity" onChange={changeQuantity} >
            {quantityList.map(num => ( <MenuItem value={num} key={num}>{num}</MenuItem> ))}
            </Select>
          </FormControl>
        </Typography>
      </Box>
    );
  };