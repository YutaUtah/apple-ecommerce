import React, { useState } from "react";
// components
import Item from "./Item.jsx";
import "./Category.css";
// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

import productList from "../data/productList.js";

const OneCategory = (props) => {

  return (
    <div>
      <Container>
        <Box sx={{ mt: 15 }}>
          <Typography sx={{ textAlign: "start" }} variant="h4">
            {props.category}ストア
          </Typography>
          <div className="media-controller ">
            <Stack
              component="div"
              direction="row"
              sx={{ mt: 5, overflow: "scroll" }}
            >
              {props.productList[props.category].map((item) => (
                <Item item={item} key={item.productName} addItem={item => props.addItem(item)}/>
              ))}
            </Stack>
          </div>
        </Box>
      </Container>
    </div>
  );
};

const Category = (props) => {
  const [item, setItem] = useState('Category')
  console.log(item)
  // make sure to press fav icons
  return (
    <div>
      <h1>{item}</h1>
      {Object.keys(productList).map((key) => (
        <OneCategory productList={productList} category={key} addItem={item => setItem(item)}/>
      ))}
    </div>
  );
};

export default Category;