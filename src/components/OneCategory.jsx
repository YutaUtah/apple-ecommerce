import React from "react";

// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

// components
import Item from "../components/Item.jsx";


const OneCategory = (props) => {

    return (
      <div>
        <Container>
          <Box sx={{ mt: 15 }}>
            <Typography sx={{ textAlign: "start" }} variant="h4">
              {props.category}ストア
            </Typography>
            <div className="media-controller ">
              <Stack component="div" direction="row" sx={{ mt: 5, overflow: "scroll" }}>
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

export default OneCategory