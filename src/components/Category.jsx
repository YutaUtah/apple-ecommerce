import React, { useContext } from "react";

// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

// components
import { Item } from "./Item.jsx";
import { UserContext } from "../providers/ContextProvider.jsx";

export const Category = (props) => {
    const { category } = props;
    const { productList } = useContext(UserContext);

    return (
      <div>
        <Container>
          <Box sx={{ pb: 5 }}>
            <Typography sx={{ mx: 2, textAlign: "start" }} variant="h4">
              {category}
            </Typography>
            <Stack component="div" direction="row" sx={{ mt: 5, overflow: "scroll" }}>
              {productList[category].map((item) => (
                <Item item={item} key={item.productName} />
              ))}
            </Stack>
          </Box>
        </Container>
      </div>
    );
  };
