import React from "react";

// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

// components
import { Item } from "../components/Item.jsx";

export const OneCategory = (props) => {
    const { category, productList } = props;

    return (
      <div>
        <Container>
          <Box　sx={{ pb: 12 }}>
            <Typography sx={{ textAlign: "start" }} variant="h4">
              {category}
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
