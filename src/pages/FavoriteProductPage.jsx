// React
import React, { useContext } from "react";

// components
import { UserContext } from "../providers/ContextProvider";
import { FavItem } from "../components/FavItem";
import { Container, Typography } from "@mui/material";

export const FavoriteProductPage = () => {
  const { favList } = useContext(UserContext);

  return (
    <div>
      <Container>
        <Typography sx={{ textAlign: "start", mb: 5}} variant="h4">
          Favorite List
        </Typography>
        {Object.keys(favList).map((key) => {
          return (
            <div>
              {favList[key].map((value) => (
                <div>
                  <FavItem  item={value} key={value.productName} />
                </div>
              ))}
            </div>
          );
        })}
      </Container>
    </div>
  );
};