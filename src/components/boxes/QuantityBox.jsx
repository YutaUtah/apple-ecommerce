// React
import React from "react";

// Material UI
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

export const QuantityBox = () => {
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