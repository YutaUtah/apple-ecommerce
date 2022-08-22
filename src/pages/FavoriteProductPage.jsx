// React
import React, { useContext } from "react";

// components
import "../components/Category.css";
import { UserContext } from "../providers/ContextProvider";
import { FavItem } from "../components/FavItem";
import { Header } from "../components/Header";

export const FavoriteProductPage = () => {
  const { favList } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>Your Favorite</h1>
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
      </div>
    </div>
  );
};
