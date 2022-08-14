import React, { createContext, useState } from "react";

export const FavItemContext = createContext({});

const FavItemProvider = (props) => {
    const { children } = props;
    const [favList, setFavList] = useState({});

    const addItemInList = ({item}) => {
        const category = item.category
        favList[category] === undefined ? favList[category] = [item] : favList[category].push(item)

        setFavList(favList)
      }

    return (
        <FavItemContext.Provider value={{ favList, addItemInList }}>
        {children}
        </FavItemContext.Provider>
    )
}

export default FavItemProvider;