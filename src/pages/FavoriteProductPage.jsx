// React
import React, { useContext } from "react";

// components
import "../components/Category.css";
import { Category } from "../components/Category";
import { Header } from "../components/Header";
import { UserContext } from "../providers/ContextProvider";
import { OneCategory } from "../components/OneCategory";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Item } from "../components/Item";

export const FavoriteProductPage = () => {
  const { favList } = useContext(UserContext);
  {
    Object.keys(favList).map((key, value) => console.log(favList[key][value]));
  }

  return (
    <div>
      <Header />

      {/* <Category productList={favList} /> */}
      {/* TODO: */}
      {/* {Object.keys(favList).map((key) => (
        <OneCategory productList={favList} category={key} key={key} />
      ))} */}
      {/* {Object.keys(favList).map((key, value) => (
    favList[key][value].productName
))} */}
      {Object.keys(favList).map((key, value) => (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Card
            sx={{ minHeight: 250, minWidth: 800, m: 10, display: "flex", alignItems: "center", justifyContent: "space-between", border: "solid" }} >
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                <CardMedia component="img" height="200" width="100" image={ favList[key][value].image } alt="Product Image" />
                </Grid>
                <Grid xs={6}md={6}sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Typography gutterBottom variant="h5" component="div">
                    {favList[key][value].productName}
                </Typography>
                </Grid>
                <Grid xs={6} md={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h6" color="text.secondary">
                {favList[key][value].price}
                </Typography>
                </Grid>
            </Grid>
            </Card>
        </Box>
      ))}
    </div>
  );
};
