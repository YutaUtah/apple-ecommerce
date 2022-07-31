

import Header from "../components/Header"

// components
import Item from "../components/Item.jsx";
import "../components/Category.css";
// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

import productList from "../data/productList.js";

import React from "react";
import { Link } from "react-router-dom"
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCartIcon from "@mui/icons-material/AddShoppingCart";


const OneCategory = ({ productList, category }) => {
    return (
      <div>
        <Container>
          <Box sx={{ mt: 15 }}>
            <Typography sx={{ textAlign: "start" }} variant="h4">
              {category}ストア
            </Typography>
            <div className="media-controller ">
              <Stack
                component="div"
                direction="row"
                sx={{ mt: 5, overflow: "scroll" }}
              >
                {productList[category].map((item) => (
                  <Item item={item} key={item.productName} />
                ))}
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
    );
  };
  
  const FavoriteProductPage = () => {
    return (
      <div>
        {Object.keys(productList).map((key) => (
          <OneCategory productList={productList} category={key} />
        ))}
      </div>
    );
  };
  

export default FavoriteProductPage;