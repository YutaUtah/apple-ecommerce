import Header from "../components/Header.jsx";
import LeftProductDetail from "../components/LeftProductDetail.jsx";
import RightProductDetail from "../components/RightProductDetail.jsx";
import productList from "../data/productList.js";

import { useParams } from "react-router-dom";


import { styled } from "@mui/material/styles";
import { Box, Container, Paper, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  minHeight: 550,
}));

const ProductInfo = () => {
  const params = useParams();

  function getProductfromLinkName (productList) {
    for (const key of Object.keys(productList)) {
      if (typeof productList[key].find((product) => {return product.linkName == params.productName;}) === "object") {
        return  productList[key].find((product) => {return product.linkName == params.productName;})
      }
    }
  }

  const product = getProductfromLinkName(productList);


  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ mt: 12 }}>
          <h1>Product Details</h1>
          <Grid sx={{ mt: 2 }} container spacing={2}>
            <Grid item xs={8} >
              <Item>
                <LeftProductDetail product={product}/>
              </Item>
            </Grid>
            <Grid item xs={4} >
              <Item>
                <RightProductDetail />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProductInfo;