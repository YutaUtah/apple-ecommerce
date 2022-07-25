import Header from "../components/Header.jsx";
import LeftProductDetail from "../components/LeftProductDetail.jsx";
import RightProductDetail from "../components/RightProductDetail.jsx";

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
  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ mt: 12 }}>
          <h1>Product Detail</h1>
          <Grid sx={{ mt: 2 }} container spacing={2}>
            <Grid item xs={8} >
              <Item>
                <LeftProductDetail />
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
