// React
import { useParams } from "react-router-dom";

// Components
import { LeftProductDetails } from "../components/templates/LeftProductDetails";
import { RightProductDetails } from "../components/templates/RightProductDetails";

// material UI
import { styled } from "@mui/material/styles";
import { Box, Container, Paper, Grid } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../providers/ContextProvider.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  minHeight: 550,
}));

export const ProductInfo = () => {

  const params = useParams();
  const { productList } = useContext(UserContext);

  const getProductfromLinkName = (productList) => {
    for (const key of Object.keys(productList)) {
      if (typeof productList[key].find((product) => {return product.linkName == params.productName;}) === "object") {
        return  productList[key].find((product) => {return product.linkName == params.productName;})
      }
    }
  }

  const product = getProductfromLinkName(productList);

  return (
    <div>
      <Container>
        <Box sx={{ mt: 12 }}>
          <h1>Product Details</h1>
          <Grid sx={{ mt: 2 }} container spacing={2}>
            <Grid item xs={8} >
              <Item>
                <LeftProductDetails product={product}/>
              </Item>
            </Grid>
            <Grid item xs={4} >
              <Item>
                <RightProductDetails item={product}/>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};