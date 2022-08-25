// React
import React, { createContext, useState } from "react";

// global config
import productList from "../data/productList";

export const UserContext = createContext({});

const ContextProvider = (props) => {
    const { children } = props;
    const [favList, setFavList] = useState({});
    const [cartList, setCartList] = useState({});

    const addItemBase = (item, listByPurpose) => {
        const category = item.category
        if ( listByPurpose[category] === undefined ) {
            listByPurpose[category] = [item]
        } else if (listByPurpose[category].includes(item)) {
            const index = listByPurpose[category].indexOf(item)
            listByPurpose[category].splice(index, 1)
            if (listByPurpose[category].length === 0) {
                delete listByPurpose[category];
            }
        } else {
            listByPurpose[category].push(item)
        }
    }

    const removeItemBase = () => {
        console.log('removed item')
    }

    const removeFavItem = () => {
        removeItemBase();
        console.log('removed Favitem')
    }
    const removeCartItem = () => {
        removeItemBase();
        console.log('removed Cartitem')
    }

    const addFavItem = ({item}) => {
        addItemBase(item, favList)
        setFavList(favList)
      }

    const addCartItem = ({item}) => {
        addItemBase(item, cartList)
        setCartList(cartList)
      }

    return (
        <UserContext.Provider value={{ favList, addFavItem, removeFavItem, cartList, addCartItem, removeCartItem, productList }}>
          {children}
        </UserContext.Provider>
    )
}

export default ContextProvider;