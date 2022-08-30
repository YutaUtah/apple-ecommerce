// React
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useContext } from "react";
import { Category } from "../components/Category";
import { Dropdown } from "../components/dropdowns/Dropdown";
import { UserContext } from "../providers/ContextProvider";

export const DefaultProductPage = () => {
  const { productList } = useContext(UserContext);

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-end">
          <Dropdown name="Sort"/>
          <Dropdown name="Filter"/>
        </div>
        {Object.keys(productList).map((key) => (
          <Category productList={productList} category={key} key={key} />
        ))}
      </Container>
    </div>
  );
};
