// React
import React, { useContext } from "react";

// components
import "../components/Category.css";
import { UserContext } from "../providers/ContextProvider";
import { FavItem } from "../components/FavItem";
import { Header } from "../components/Header";
import { Container, Typography } from "@mui/material";

export const FavoriteProductPage = () => {
  const { favList } = useContext(UserContext);

  return (
    <div>
      <Header />
      <Container>
        <Typography sx={{ textAlign: "start", mx: 22, my: 2}} variant="h4">
          Favorite List
        </Typography>
        {Object.keys(favList).map((key) => {
          return (
            <div>
              {favList[key].map((value) => (
                <div>
                  <FavItem productName={value.productName} image={value.image} price={value.price} />
                </div>
              ))}
            </div>
          );
        })}
      </Container>
    </div>
  );
};
