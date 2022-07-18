import React from "react";
// components
import Item from "./Item.jsx";
import "./Category.css";
// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Category = ({ productList, category }) => {

  return (
    <div>
      <Container>
        <Box sx={{ mt: 15 }}>
          <Typography sx={{ textAlign: "start" }} variant="h4">
            {category}ストア
          </Typography>
          <div className="media-controller ">
            <Stack component="div" direction="row" sx={{ mt: 5, overflow: "scroll" }}>
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

export default Category;
