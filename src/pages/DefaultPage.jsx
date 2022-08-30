// React
import { Container } from "@mui/material";
import React, { useContext } from "react";
import { Category } from "../components/Category";
import { Dropdown } from "../components/dropdowns/Dropdown";
import { UserContext } from "../providers/ContextProvider";

export const DefaultProductPage = () => {
  const { productList, sortHandleChange, filterHandleChange } = useContext(UserContext);

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-end">
          <Dropdown name="Sort"   dropdownObject={{'ascending': 'Ascending', 'descending': 'Descending'}} handleChange={sortHandleChange}/>
          <Dropdown name="Filter" dropdownObject={{'moreThanOneThousand': '$1000~'}} handleChange={filterHandleChange}/>
        </div>
        {Object.keys(productList).map((key) => (
          <Category productList={productList} category={key} key={key} />
        ))}
      </Container>
    </div>
  );
};
