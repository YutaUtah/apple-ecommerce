// React
import React, { createContext, useState } from "react";

// global config
import { globalProductList } from "../data/productList";

export const UserContext = createContext();

const ContextProvider = (props) => {
    const { children } = props;
    // need to set favItem to re-render the page when favorite icon is hit in FavProduct page
    const [favItem, setFavItem] = useState({});
    const [cartItem, setCartItem] = useState({});

    const [favList, setFavList] = useState({});
    const [cartList, setCartList] = useState({});

    const [productList, setProductList] = useState(globalProductList);
    const [productItem, setProductItem] = useState({})

    const displayPrice = (price) =>  `$${price}`;

    const addItemBase = (item, listByPurpose) => {
        const category = item.category
        if ( listByPurpose[category] === undefined ) {
            listByPurpose[category] = [item]
        } else if (listByPurpose[category].includes(item)) {
            const index = listByPurpose[category].indexOf(item)
            listByPurpose[category].splice(index, 1)
            if (listByPurpose[category].length === 0) delete listByPurpose[category];
        } else {
            listByPurpose[category].push(item)
        }
    }

    const removeItemBase = (item, listByPurpose) => {
        const category = item.category
        const index = listByPurpose[category].indexOf(item)
        listByPurpose[category].splice(index, 1)
        if (listByPurpose[category].length === 0) delete listByPurpose[category];
    }

    const removeFavItem = ({item}) => {
        removeItemBase(item, favList);
        setFavItem(item);
        setFavList(favList);
    }

    const removeCartItem = ({item}) => {
        removeItemBase(item, cartList);
        setCartItem(item)
        setCartList(cartList);
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
        // alert(`Paid ${item.price} USD for ${item.productName}, thank you!`)
        alert("proceeded item!")
    }

    const sortHandleChange = (event, item) => {
        switch (event.target.value) {
            case "ascending":
                Object.entries(productList).map(([key, value]) => (value.sort((a, b) => (a.price > b.price) ? 1 : -1)))
                break;
            case "descending":
                Object.entries(productList).map(([key, value]) => (value.sort((a, b) => (a.price < b.price) ? 1 : -1)))
                break;
            default:
                break;
        }
        setProductItem(item)
        // only setProductList(item) works as well
        setProductList(productList)
    }

    const filterHandleChange = (event) => {
        switch (event.target.value) {
            case "moreThanOneThousand":
                console.log('$1000 hits')
                break;
            default:
                console.log('neither')
        }
    }

    const totalPriceCalculator = (cartList) => {
        let totalPrice = 0
        Object.keys(cartList).map((key) => {
          cartList[key].map((item)=> {
            totalPrice += item.price
          })
        })
        return totalPrice
      }

    const styles = {
        buttonStyles: {minWidth: "200px", minHeight: "30px" },
        productBoxStyles: { display: "flex", justifyContent: "end", py:1, bgcolor: "background.paper", borderRadius: 1 },
        favButtonStyles:  { display: "flex", justifyContent: "center", p: 1, bgcolor: "background.paper", borderRadius: 1 },
    }

    const value = {
        favList,
        addFavItem,
        removeFavItem,
        cartList,
        addCartItem,
        removeCartItem,
        productList,
        setProductList,
        proceedPayItem,
        displayPrice,
        sortHandleChange,
        filterHandleChange,
        totalPriceCalculator,
        styles,
    }

    return (
        <UserContext.Provider value={value}>
          {children}
        </UserContext.Provider>
    )
}

export default ContextProvider;