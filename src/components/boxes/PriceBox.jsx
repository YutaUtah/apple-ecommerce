// React
import React from "react";

// Material UI
import { Box, Typography } from "@mui/material";

export const PriceBox = (props) => {

    const { price } = props;

    return (
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1, m: 1, bgcolor: "background.paper", borderRadius: 1 }}>
        <Typography variant="h6">Price</Typography>
        <Typography variant="h6">${price}</Typography>
      </Box>
    );
  };