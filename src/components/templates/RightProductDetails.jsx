// React
import React, { useContext } from "react";

// material UI
import { Link } from "react-router-dom";

// components
import { PriceBox } from "../boxes/PriceBox";
import { QuantityBox } from "../boxes/QuantityBox";
import { TotalBox } from "../boxes/TotalBox";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { UserContext } from "../../providers/ContextProvider";


export const RightProductDetails = (props) => {
  const { item } = props;
  const { addFavItem, addCartItem, styles } = useContext(UserContext);

  return (
    <div>
      <PriceBox price={item.price}/>
      <QuantityBox />
      <TotalBox price={item.price}/>
      <PrimaryButton buttonTitle="Add Favorite" changeItemClick={() => addFavItem({item})} buttonStyles={styles.buttonStyles} boxStyles={styles.productBoxStyles} />
      <PrimaryButton buttonTitle="Add Cart" changeItemClick={() => addCartItem({item})} buttonStyles={styles.buttonStyles} boxStyles={styles.productBoxStyles} />
      <Link to={`/cart`} >
        <PrimaryButton buttonTitle="Go To Cart Page" buttonStyles={styles.buttonStyles} boxStyles={styles.productBoxStyles} />
      </Link>
    </div>
  );
};