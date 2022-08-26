// React
import React, { createContext, useState } from "react";

// global config
import productList from "../data/productList";

export const UserContext = createContext({});

const ContextProvider = (props) => {
    const { children } = props;
    // need to set favItem to re-render the page when favorite icon is hit in FavProduct page
    const [favItem, setFavItem] = useState({});
    const [cartItem, setCartItem] = useState({});

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

    const removeItemBase = (item, listByPurpose) => {
        const category = item.category
        const index = listByPurpose[category].indexOf(item)
        listByPurpose[category].splice(index, 1)
        if (listByPurpose[category].length === 0) {
            delete listByPurpose[category];
        }
    }

    const removeFavItem = ({item}) => {
        removeItemBase(item, favList);
        setFavItem(item)
        setFavList(favList);
    }

    const addFavItem = ({item}) => {
        addItemBase(item, favList)
        setFavList(favList)
      }

    const addCartItem = ({item}) => {
        addItemBase(item, cartList)
        setCartList(cartList)
      }

    const proceedPayItem = ({item}) => {
        console.log(item)
        alert(`Paid ${item.price} USD for ${item.productName}, thank you!`)
    }
    return (
        <UserContext.Provider value={{ favList, addFavItem, removeFavItem, cartList, addCartItem, productList, proceedPayItem }}>
          {children}
        </UserContext.Provider>
    )
}

export default ContextProvider;