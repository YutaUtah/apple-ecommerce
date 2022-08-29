// React
import React, { useContext } from "react";

// components
import { UserContext } from "../providers/ContextProvider";
import { FavItem } from "../components/FavItem";
import { Container } from "@mui/material";

export const FavoriteProductPage = () => {
  const { favList } = useContext(UserContext);

  return (
    <div>
      <Container>
        <h1>Favorite List</h1>
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