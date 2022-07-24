import Header from "../components/Header.jsx";
import productList from "../data/productList";

import { styled } from "@mui/material/styles";
import { Box, Container, Stack, Typography, Paper, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

const ProductInfo = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ mt: 12 }}>
          <h1>Product Detail</h1>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <img
                  src={"images/macbook-air-m1.jpeg"}
                  height="300"
                  width="350"
                />
                <h2>MacBook Air with M1 chip</h2>
                <Item>
                  <p>{productList.Mac[0]["description"]}</p>
                </Item>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h6">$1000</Typography>
                  <Typography variant="h6">$1000</Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProductInfo;
