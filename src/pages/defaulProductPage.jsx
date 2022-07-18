import Category from "../components/Category.jsx";
import productList from "../data/productList.js";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const defaultProductPage = () => {
  const keys = Object.keys(productList);


return (
    <div>
      <Category productList={productList} category="Mac" />
      <Category productList={productList} category="iPhone" />
      <Category productList={productList} category="iPad" />
      <Category productList={productList} category="Watch" />
    </div>
  )

  ;
};

export default defaultProductPage;
