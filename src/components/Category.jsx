import React from 'react';
// components
import Item from "./Item.jsx";
import "./Category.css"
// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import productList from "../data/productList.js";



const Category = () => {

  return (
    <Container>
      <Box sx={{ mt: 15 }}>
        <Typography sx={{textAlign: "start"}} variant="h4" >ストア</Typography>
        <div className="media-controller ">
        <Stack component="div" direction="row" sx={{ mt: 5 , overflow: "scroll" }}>
          {productList.map((item) => <Item item={item} key={item.productName} />)}
        </Stack>
        </div>
      </Box>
      </Container>
  );
};

export default Category;
